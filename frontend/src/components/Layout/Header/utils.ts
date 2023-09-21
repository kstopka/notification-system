import { URLPaths } from "../../../constants/routes";

export const objectToArray = (obj: URLPaths) =>
  Object.keys(obj).map((key) => obj[key]);
