import { UrlShortener } from "../../../domain/entities/url-shortener.entity";
import { UrlShortenerRepository } from '../../../domain/repositories/url-shortener.repository';

export class CreateUrlShortUseCase {
  constructor(private readonly urlShortenerRepository: UrlShortenerRepository) {}

  async execute(urlData: Partial<UrlShortener>): Promise<UrlShortener> {
    const { fullUrl, shortUrl } = urlData;
    if (fullUrl === undefined || shortUrl === undefined) {
      throw new Error("All fields are required");
    }
    const newData = new UrlShortener(fullUrl, shortUrl);
    return await this.urlShortenerRepository.createUrlShort(newData);
  }
}