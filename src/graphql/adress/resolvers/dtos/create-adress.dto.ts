/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAdressDto {
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
