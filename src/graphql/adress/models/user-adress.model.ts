/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Adress {
  @Field((type) => Int)
  userId: number;

  @Field()
  streetName: string;

  @Field((type) => Int)
  number: number;

  @Field()
  zipcode: string;

  @Field()
  city: string;

  @Field()
  state: string;

  @Field()
  country: string;
}
