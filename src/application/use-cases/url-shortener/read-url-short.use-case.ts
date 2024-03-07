import { UrlShortener } from '../../../domain/entities/url-shortener.entity';
import { UrlShortenerRepository } from '../../../domain/repositories/url-shortener.repository';


export class ReadUrlShortUseCase {
  private repository: UrlShortenerRepository;

  constructor(repository: UrlShortenerRepository) {
    this.repository = repository;
  }

  async execute(): Promise<UrlShortener[]> {
    return await this.repository.readUrlShort();
  }
}