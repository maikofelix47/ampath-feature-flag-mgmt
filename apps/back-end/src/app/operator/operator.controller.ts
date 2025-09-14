import { Body, Controller, Get, Post } from '@nestjs/common';
import { OperatorService } from './operator.service';
import { CreateOperatorDto } from './dto/create-operator.dto';

@Controller('operator')
export class OperatorController {
  constructor(private operatorService: OperatorService) {}
  @Get()
  findAll() {
    return this.operatorService.findAll();
  }
  @Post()
  create(@Body() createOperatorDto: CreateOperatorDto) {
    return this.operatorService.create(createOperatorDto);
  }
}
