import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Author, AuthorSchema } from 'src/author/author.model';
import { AuthorService } from 'src/author/author.service';
import { Book, BookSchema } from './book.model';
import { BookResolver } from './book.resolver';
import { BookService } from './book.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Author.name, schema: AuthorSchema },
      { name: Book.name, schema: BookSchema },
    ]),
  ],
  providers: [BookResolver, BookService, AuthorService],
})
export class BookModule {}
