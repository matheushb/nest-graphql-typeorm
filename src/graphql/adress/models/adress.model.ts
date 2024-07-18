/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'adress' })
@ObjectType()
export class Adress {
  @PrimaryColumn()
  @Field((type) => Int)
  userId: number;

  @Column()
  @Field()
  streetName: string;

  @Column()
  @Field((type) => Int)
  number: number;

  @Column()
  @Field()
  zipcode: string;

  @Column()
  @Field()
  city: string;

  @Column()
  @Field()
  state: string;

  @Column()
  @Field()
  country: string;
}
