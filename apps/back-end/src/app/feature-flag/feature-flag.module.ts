import { Module } from '@nestjs/common';
import { FeatureFlagService } from './feature-flag.service';
import { FeatureFlagController } from './feature-flag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureFlagEntity } from './entity/feature-flag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FeatureFlagEntity])],
  controllers: [FeatureFlagController],
  providers: [FeatureFlagService],
})
export class FeatureFlagModule {}
