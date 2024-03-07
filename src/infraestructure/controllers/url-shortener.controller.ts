import {Request, Response} from "express";
import {nanoid} from "nanoid";
import {CreateUrlShortUseCase} from "../../application/use-cases/url-shortener/create-url-short.use-case";
import {CreateUrlShortenerDTO} from "../dtos/url-shortener.dto";
import {ReadUrlShortUseCase} from "../../application/use-cases/url-shortener/read-url-short.use-case";


export class UrlShortenerController {
  private readonly randomStringLength: number;
  constructor(
    private readonly createUrlShortUseCase: CreateUrlShortUseCase,
    private readonly readUrlShortUseCase: ReadUrlShortUseCase
    ) {
    this.randomStringLength = 10;
  }

  async create(req: Request, res: Response) {
    try {
        const fullUrl = req.body?.fullUrl;
        if (!fullUrl) {
            return res
              .status(400)
              .json({ message: "The fullUrl field is required" });
        }
        const data = new CreateUrlShortenerDTO(
          fullUrl, this.generateRandomString(this.randomStringLength)
        );
        const createdData = await this.createUrlShortUseCase.execute(data);
        return res.status(201).json({ urlShortener: createdData });
    } catch (err) {
      return res.status(500).json({message: "Internal Server Error"});
    }
  }

  async read(req: Request, res: Response) {
    try {
      const urls = await this.readUrlShortUseCase.execute();
      return res.status(200).json({ urls });
    } catch (err) {
      console.error('Error executing read urls', err);
      return res.status(500).json({message: "Internal Server Error ***** JC", error: err});
    }
  }
  private generateRandomString(length: number): string {
    return nanoid(length);
  }
}
