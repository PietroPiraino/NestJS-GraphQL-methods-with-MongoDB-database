import { Int, InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}

@InputType()
export class FindBookInput {
  @Field()
  _id: string;
}
