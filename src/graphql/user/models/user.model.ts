/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Adress } from 'src/graphql/adress/models/user-adress.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  email: string;

  @Field({ nullable: true })
  username?: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ nullable: true })
  adress?: Adress;
}
