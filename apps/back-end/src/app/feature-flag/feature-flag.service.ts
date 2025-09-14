import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeatureFlagEntity } from './entity/feature-flag.entity';
import { Repository } from 'typeorm';
import { CreateFetaureFlagDto } from './dto/create-feature-flag.dto';

@Injectable()
export class FeatureFlagService {
  constructor(
    @InjectRepository(FeatureFlagEntity)
    private featureFlagRepository: Repository<FeatureFlagEntity>
  ) {}
  findAll() {
    return this.featureFlagRepository.find();
  }
  async create(createFetaureFlagDto: CreateFetaureFlagDto) {
    const payload = {
      ...createFetaureFlagDto,
      createdBy: 1,
    };

    const entity = this.featureFlagRepository.create(payload);
    const resp = await this.featureFlagRepository.save(entity);

    return resp;
  }
}
