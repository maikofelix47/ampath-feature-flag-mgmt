import { Body, Controller, Get, Post } from '@nestjs/common';
import { RuleService } from './rule.service';
import { CreateRuleDto } from './dto/create-rule.dto';

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
}
