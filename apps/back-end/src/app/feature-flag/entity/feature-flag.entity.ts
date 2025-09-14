import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RuleEntity } from '../../rule/entity/rule.entity';

@Entity({
  name: 'feature-flag',
})
export class FeatureFlagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: false, default: false })
  on: boolean;

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

  @OneToMany(() => RuleEntity, (rule) => rule.featureFlag)
  rules: RuleEntity[];
}
