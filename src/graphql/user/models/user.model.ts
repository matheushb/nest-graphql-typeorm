/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Adress } from 'src/graphql/adress/models/adress.model';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  username?: string;

  @Column({ default: true })
  @Field({ defaultValue: true })
  isActive: boolean;

  @OneToOne(() => Adress)
  @JoinColumn()
  @Field({ nullable: true })
  adress?: Adress;
}
