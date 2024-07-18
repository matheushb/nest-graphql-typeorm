import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AdressResolver } from './graphql/adress/resolvers/adress.resolver';
import { UserResolver } from './graphql/user/resolvers/user.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './graphql/user/models/user.model';
import { Adress } from './graphql/adress/models/adress.model';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: `src/schema.gql`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'testdb',
      port: 6060,
      username: 'postgres',
      password: 'postgres',
      entities: [User, Adress],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [UserResolver, AdressResolver],
})
export class AppModule {}
