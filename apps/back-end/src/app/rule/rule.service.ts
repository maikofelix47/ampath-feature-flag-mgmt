import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RuleEntity } from './entity/rule.entity';
import { CreateRuleDto } from './dto/create-rule.dto';
import { FeatureFlagService } from '../feature-flag/feature-flag.service';
import { AttributeService } from '../attribute/attribute.service';
import { OperatorService } from '../operator/operator.service';
import { FeatureFlagContext } from './types';
import { FeatureFlagEntity } from '../feature-flag/entity/feature-flag.entity';
import { evaluateFeatureFlag } from '../utils/feature-flag-evaluator';

@Injectable()
export class RuleService {
  constructor(
    @InjectRepository(RuleEntity)
    private ruleRepository: Repository<RuleEntity>,
    private featureFlagService: FeatureFlagService,
    private attributeService: AttributeService,
    private operatorService: OperatorService
  ) {}
  findAll() {
    return this.ruleRepository.find();
  }
  async create(createRuleDto: CreateRuleDto) {
    const { featureFlagUuid, attributeUuid, operatorUuid, value } =
      createRuleDto;
    const ff = await this.featureFlagService.findByUuid(featureFlagUuid);
    const attribute = await this.attributeService.findByUuid(attributeUuid);
    const operator = await this.operatorService.findByUuid(operatorUuid);
    const payload = {
      featureFlag: ff,
      attribute: attribute,
      operator: operator,
      value: value,
      createdBy: 1,
    };

    const entity = this.ruleRepository.create(payload);
    const resp = await this.ruleRepository.save(entity);

    return resp;
  }
  async getFeatureFlagValue(
    featureFlagName: string,
    context: FeatureFlagContext
  ) {
    const rules = await this.ruleRepository.findBy({
      featureFlag: {
        name: featureFlagName,
      },
    });
    const result = this.evaluateFlag(context, rules);
    return result;
  }

  private evaluateFlag(context: FeatureFlagContext, rules: RuleEntity[]) {
    return evaluateFeatureFlag(context, rules);
  }
}
