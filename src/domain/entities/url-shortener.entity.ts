export class UrlShortener {
  uuid: string;
  fullUrl: string;
  shortUrl: string;

  constructor(fullUrl: string, shortUrl: string) {
    this.uuid = generateId();
    this.fullUrl = fullUrl;
    this.shortUrl = shortUrl;
  }
}

function generateId(): string {
  return String(Date.now());
}