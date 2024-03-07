import { Container } from "inversify";
import { Logger } from "../logging/logger";
import { TYPES } from "../../config/types";


export const container = new Container();

container.bind(TYPES.Logger).to(Logger);

