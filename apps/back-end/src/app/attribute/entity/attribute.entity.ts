import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'attribute',
})
export class AttributeEntity {
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
}
