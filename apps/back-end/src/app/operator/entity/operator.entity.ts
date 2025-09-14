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
  name: 'operator',
})
export class OperatorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;

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

  @OneToMany(() => RuleEntity, (rule) => rule.operator)
  rules: RuleEntity[];
}
