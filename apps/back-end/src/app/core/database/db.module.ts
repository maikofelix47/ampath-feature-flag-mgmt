import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeatureFlagEntity } from '../../feature-flag/entity/feature-flag.entity';
import { AttributeEntity } from '../../attribute/entity/attribute.entity';
import { OperatorEntity } from '../../operator/entity/operator.entity';
import { RuleEntity } from '../../rule/entity/rule.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DATABASE_HOST'),
        port: configService.get<number>('DATABASE_PORT'),
        username: configService.get<string>('DATABASE_USER'),
        password: configService.get<string>('DATABASE_PASSWORD'),
        database: configService.get<string>('DATABASE_NAME'),
        entities: [
          FeatureFlagEntity,
          AttributeEntity,
          OperatorEntity,
          RuleEntity,
        ],
        synchronize: configService.get<boolean>('SYNCHRONIZE_DATABASE'),
      }),
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
