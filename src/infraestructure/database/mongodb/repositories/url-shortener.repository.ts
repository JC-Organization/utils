import { UrlShortener } from "../../../../domain/entities/url-shortener.entity";
import { UrlShortenerRepository } from "../../../../domain/repositories/url-shortener.repository";
import { UrlShortenerSchema } from "../models/url-shortener.model";

export class UrlShortenerRepositoryImpl implements UrlShortenerRepository {
    private model = UrlShortenerSchema;

    async createUrlShort(data: UrlShortener): Promise<UrlShortener> {
        return await this.model.create(data);
    }
    readUrlShortByUUID(uuid: string): Promise<UrlShortener> {
        throw new Error("Method not implemented.");
    }
    async readUrlShort(): Promise<UrlShortener[]> {
        try {
            const urls = await this.model.find();
            return urls.map(doc => doc.toObject() as UrlShortener);
        } catch (e) {
            throw new Error("Method error.");
        }
    }
    updateUrlShort(uuid: string, urlShortener: UrlShortener): Promise<UrlShortener> {
        throw new Error("Method not implemented.");
    }
    deleteUrlShort(uuid: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


}