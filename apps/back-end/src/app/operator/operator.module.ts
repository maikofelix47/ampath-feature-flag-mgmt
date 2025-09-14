import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OperatorEntity } from './entity/operator.entity';
import { OperatorController } from './operator.controller';
import { OperatorService } from './operator.service';

@Module({
  imports: [TypeOrmModule.forFeature([OperatorEntity])],
  controllers: [OperatorController],
  providers: [OperatorService],
})
export class OperatorModule {}
