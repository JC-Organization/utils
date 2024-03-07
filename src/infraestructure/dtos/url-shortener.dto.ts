export class CreateUrlShortenerDTO {
  fullUrl: string;
  shortUrl: string;

  constructor(fullUrl: string, shortUrl: string) {
    this.fullUrl = fullUrl;
    this.shortUrl = shortUrl;
  }
}