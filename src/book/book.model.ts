import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Author } from 'src/author/author.model';
import { Schema as MongooseSchema, Document } from 'mongoose';

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: number;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Author.name })
  @Field(() => Author)
  author: Author | number;
}

export type BookDocument = Book & Document;
export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({ author: 1 });
