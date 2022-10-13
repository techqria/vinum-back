import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WineDocument = Wine & Document;

@Schema()
export class Wine {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  price: string;
}

export const WineSchema = SchemaFactory.createForClass(Wine);
