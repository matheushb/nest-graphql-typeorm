/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Resolver,
  Query,
  Args,
  Int,
  Parent,
  ResolveField,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { users } from 'src/_mocks_/users.mock';
import { addresses } from 'src/_mocks_/adress.mock';
import { CreateUserDto } from './dtos/create-user.dto';
import { Adress } from 'src/graphql/adress/models/user-adress.model';

let inc = 6;

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true, name: 'findUserById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return users.find((user) => user.id === id);
  }

  @Query((returns) => [User], { name: 'findAll' })
  find() {
    return users;
  }

  @ResolveField((returns) => Adress, { name: 'adress', nullable: true })
  findAdress(@Parent() user: User) {
    return addresses.find((adress) => adress.userId === user.id);
  }

  @Mutation((returns) => User, { name: 'createUser' })
  create(@Args('createUserDto') createUserDto: CreateUserDto) {
    const newUser: User = { ...createUserDto, isActive: true, id: inc++ };

    users.push(newUser);
    return newUser;
  }
}
