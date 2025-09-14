import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FeatureFlagEntity } from '../../feature-flag/entity/feature-flag.entity';
import { AttributeEntity } from '../../attribute/entity/attribute.entity';
import { OperatorEntity } from '../../operator/entity/operator.entity';

@Entity({
  name: 'rule',
})
export class RuleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => FeatureFlagEntity, (featureFlag) => featureFlag.rules, {
    eager: true,
  })
  featureFlag: FeatureFlagEntity;

  @ManyToOne(() => AttributeEntity, (attribute) => attribute.rules, {
    eager: true,
  })
  attribute: AttributeEntity;

  @ManyToOne(() => OperatorEntity, (operator) => operator.rules, {
    eager: true,
  })
  operator: OperatorEntity;

  @Column({ nullable: false })
  value: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  createdBy: number;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  updatedBy: number;

  @Column({ nullable: true })
  voided: boolean;

  @Column({ nullable: true, type: 'timestamp' })
  voidedDate: Date;

  @Column({ nullable: true })
  voidedBy: number;

  @Column({ nullable: true })
  voidedReason: string;

  @Column({ unique: true })
  @Generated('uuid')
  uuid: string;
}
