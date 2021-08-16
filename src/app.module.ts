import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { BookModule } from './book/book.module';
import { dbConnectionString } from './dbConnectionString';

@Module({
  imports: [
    MongooseModule.forRoot(dbConnectionString),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    AuthorModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
