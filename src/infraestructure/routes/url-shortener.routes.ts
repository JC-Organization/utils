import {Router} from "express";
import {UrlShortenerController} from "../controllers/url-shortener.controller";
import {UrlShortenerRepositoryImpl} from "../database/mongodb/repositories/url-shortener.repository";
import {CreateUrlShortUseCase} from "../../application/use-cases/url-shortener/create-url-short.use-case";
import {ReadUrlShortUseCase} from "../../application/use-cases/url-shortener/read-url-short.use-case";

const router = Router();
const repository = new UrlShortenerRepositoryImpl();

const createUrlShortUseCase = new CreateUrlShortUseCase(repository);
const readUrlShortUseCase = new ReadUrlShortUseCase(repository);

const urlShortenerController = new UrlShortenerController(
  createUrlShortUseCase,
  readUrlShortUseCase
);



router.post("/urlShort", urlShortenerController.create.bind(urlShortenerController));
router.get("/urlShort", urlShortenerController.read.bind(urlShortenerController));

export default router;

