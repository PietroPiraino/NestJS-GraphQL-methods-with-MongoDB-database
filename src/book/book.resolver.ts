import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { Author } from 'src/author/author.model';
import { AuthorService } from 'src/author/author.service';
import { Book } from './book.model';

import { BookService } from './book.service';
import { FindBookInput, CreateBookInput } from './DTO/book.input';

@Resolver(() => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private authorService: AuthorService,
  ) {}

  @Query(() => Book)
  async book(@Args('input') { _id }: FindBookInput) {
    return this.bookService.findById(_id);
  }

  @Query(() => [Book]) /* <-- Risposta della Query, un array di Book */
  async books() /* <-- Nome della Query */ {
    return this.bookService.findMany();
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }
}
