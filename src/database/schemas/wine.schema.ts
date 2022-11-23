import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type WineDocument = Wine & Document;

@Schema()
export class Wine {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: String })
  price: string;

  @Prop({ required: true, type: String })
  sale: string;

  @Prop({ required: true, type: String })
  category: string;

  @Prop({ required: true, type: String })
  country: string;

  @Prop({ required: true, type: String })
  vol: string;

  @Prop({ required: true, type: String })
  alcohol: string;

  @Prop({ required: true, type: String })
  grapes: string;

  @Prop({ required: true, type: String })
  year: string;

  @Prop({ required: true, type: String })
  description: string;

  @Prop({ required: true, type: String })
  image: string;
}

export const WineSchema = SchemaFactory.createForClass(Wine);
