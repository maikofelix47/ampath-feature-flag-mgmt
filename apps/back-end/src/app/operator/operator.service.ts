import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OperatorEntity } from './entity/operator.entity';
import { CreateOperatorDto } from './dto/create-operator.dto';

@Injectable()
export class OperatorService {
  constructor(
    @InjectRepository(OperatorEntity)
    private operatorRepository: Repository<OperatorEntity>
  ) {}
  findAll() {
    return this.operatorRepository.find();
  }
  async create(createOperatorDto: CreateOperatorDto) {
    const payload = {
      ...createOperatorDto,
      createdBy: 1,
    };

    const entity = this.operatorRepository.create(payload);
    const resp = await this.operatorRepository.save(entity);

    return resp;
  }
}
