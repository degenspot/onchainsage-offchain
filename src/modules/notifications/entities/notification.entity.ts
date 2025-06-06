import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from 'typeorm';
import { User } from '../../../user/entities/user.entity';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id: string | undefined;

  @Column('text')
  type: string | undefined; 

  @Column('text')
  title: string | undefined;

  @Column('text')
  message: string | undefined;

  @Column('text', { nullable: true })
  entityId: string | undefined; 

  @Column('text', { nullable: true })
  entityType: string | undefined; 

  @Column('boolean', { default: false })
  isRead: boolean | undefined;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date | undefined;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date | undefined;

  @ManyToOne(() => User)
  recipient: User | undefined;

  @ManyToOne(() => User)
  actor: User | undefined;
}