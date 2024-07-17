import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AdressResolver } from './graphql/adress/resolvers/adress.resolver';
import { UserResolver } from './graphql/user/resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: `src/schema.gql`,
    }),
  ],
  controllers: [],
  providers: [UserResolver, AdressResolver],
})
export class AppModule {}
