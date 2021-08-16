import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from 'src/book/book.model';
import { BookService } from 'src/book/book.service';
import { Author, AuthorSchema } from './author.model';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  providers: [AuthorResolver, AuthorService, BookService],
})
export class AuthorModule {}
