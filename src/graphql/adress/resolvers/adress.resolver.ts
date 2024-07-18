/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { addresses } from 'src/_mocks_/adress.mock';
import { Adress } from '../models/adress.model';
import { CreateAdressDto } from './dtos/create-adress.dto';

@Resolver()
export class AdressResolver {
  @Mutation((returns) => Adress, { name: 'createAdress' })
  create(@Args('createAdressDto') createAdressDto: CreateAdressDto) {
    const newAdress: Adress = { ...createAdressDto };

    addresses.push(newAdress);
    return newAdress;
  }
}
