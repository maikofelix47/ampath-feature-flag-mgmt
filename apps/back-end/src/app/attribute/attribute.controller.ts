import { Body, Controller, Get, Post } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { CreateAttributeDto } from './dto/create-attribute.entity';

@Controller('attribute')
export class AttributeController {
  constructor(private attributeService: AttributeService) {}
  @Get()
  findAll() {
    return this.attributeService.findAll();
  }
  @Post()
  create(@Body() createAttributeDto: CreateAttributeDto) {
    return this.attributeService.create(createAttributeDto);
  }
}
