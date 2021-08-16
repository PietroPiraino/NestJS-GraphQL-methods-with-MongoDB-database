import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { Book } from 'src/book/book.model';
import { BookService } from 'src/book/book.service';
import { Author } from './author.model';
import { AuthorService } from './author.service';
import { CreateAuthorInput } from './DTO/author.input';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private authorService: AuthorService,
    private bookService: BookService,
  ) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany();
  }

  @ResolveField(() => [Book])
  async books(@Parent() parent: Author) {
    return this.bookService.findByAuthorId(parent._id);
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput) {
    return this.authorService.createAuthor(input);
  }
}
