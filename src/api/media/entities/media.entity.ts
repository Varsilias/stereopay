import {
  PrimaryGeneratedColumn,
  Generated,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { MediaType, StatusType } from 'src/common/helpers/enum';
import { Exclude } from 'class-transformer';

@Entity({ name: 'media' })
export class MediaEntity {
  @PrimaryGeneratedColumn()
  @Generated('uuid')
  id: string;

  @Column('enum', { enum: MediaType })
  type: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  url: string;

  @Column('enum', { enum: StatusType, default: StatusType.ACTIVE })
  status: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
    comment: 'Entity Created At',
  })
  createdAt!: Date;

  // Nice columns for internal statistics and diagnostics
  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
    comment: 'Entity Updated At',
  })
  updatedAt!: Date;

  // Nice columns for internal statistics and diagnostics
  @DeleteDateColumn({
    type: 'timestamp',
    nullable: true,
    comment: 'Entity Deleted At',
    select: false,
  })
  @Exclude()
  deletedAt!: Date;
}
