import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RuleEntity } from './entity/rule.entity';
import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';
import { FeatureFlagService } from '../feature-flag/feature-flag.service';
import { AttributeService } from '../attribute/attribute.service';
import { OperatorService } from '../operator/operator.service';
import { FeatureFlagEntity } from '../feature-flag/entity/feature-flag.entity';
import { AttributeEntity } from '../attribute/entity/attribute.entity';
import { OperatorEntity } from '../operator/entity/operator.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RuleEntity,
      FeatureFlagEntity,
      AttributeEntity,
      OperatorEntity,
    ]),
  ],
  controllers: [RuleController],
  providers: [
    RuleService,
    FeatureFlagService,
    AttributeService,
    OperatorService,
  ],
})
export class RuleModule {}
