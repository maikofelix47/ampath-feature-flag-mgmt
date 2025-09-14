import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeatureFlagService } from './feature-flag.service';
import { CreateFetaureFlagDto } from './dto/create-feature-flag.dto';

@Controller('feature-flag')
export class FeatureFlagController {
  constructor(private featureFlagService: FeatureFlagService) {}
  @Get()
  findAll() {
    return this.featureFlagService.findAll();
  }
  @Post()
  create(@Body() createFetaureFlagDto: CreateFetaureFlagDto) {
    return this.featureFlagService.create(createFetaureFlagDto);
  }
}
