import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttributeEntity } from './entity/attribute.entity';
import { CreateAttributeDto } from './dto/create-attribute.entity';

@Injectable()
export class AttributeService {
  constructor(
    @InjectRepository(AttributeEntity)
    private attributeRepository: Repository<AttributeEntity>
  ) {}
  findAll() {
    return this.attributeRepository.find();
  }
  findByUuid(uuid: string) {
    return this.attributeRepository.findOneBy({
      uuid: uuid,
    });
  }
  async create(createAttributeDto: CreateAttributeDto) {
    const payload = {
      ...createAttributeDto,
      createdBy: 1,
    };

    const entity = this.attributeRepository.create(payload);
    const resp = await this.attributeRepository.save(entity);

    return resp;
  }
}
