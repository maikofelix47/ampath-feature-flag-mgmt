import { Body, Controller, Get, Post } from '@nestjs/common';
import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';
import { GetFeatureFlagDto } from './dto/get-feature-flag.dto';

@Controller('rule')
export class RuleController {
  constructor(private ruleService: RuleService) {}
  @Get()
  findAll() {
    return this.ruleService.findAll();
  }
  @Post()
  create(@Body() createRuleDto: CreateRuleDto) {
    return this.ruleService.create(createRuleDto);
  }
  @Post('feature-flag')
  getFlag(@Body() getFeatureFlagDto: GetFeatureFlagDto) {
    const { featureFlagName, context } = getFeatureFlagDto;
    console.log({ featureFlagName, context });
    return this.ruleService.getFeatureFlagValue(featureFlagName, context);
  }
}
