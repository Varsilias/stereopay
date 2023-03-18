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

  @Column('enum', { enum: StatusType })
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
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
    comment: 'Entity Deleted At',
  })
  deletedAt!: Date;
}
