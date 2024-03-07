import { UrlShortener } from '../entities/url-shortener.entity';

export interface UrlShortenerRepository {
  createUrlShort(urlShortener: UrlShortener): Promise<UrlShortener>;
  readUrlShortByUUID(uuid: string): Promise<UrlShortener>;
  readUrlShort(): Promise<UrlShortener[]>;
  updateUrlShort(uuid: string, urlShortener: UrlShortener): Promise<UrlShortener>;
  deleteUrlShort(uuid: string): Promise<void>;
}