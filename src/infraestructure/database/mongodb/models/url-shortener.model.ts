import { model, Schema } from "mongoose";
import { UrlShortener } from "../../../../domain/entities/url-shortener.entity";

const schema = new Schema<UrlShortener>({
  uuid: { type: String, required: true },
  fullUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

export const UrlShortenerSchema = model<UrlShortener>('urlshorteners', schema);
