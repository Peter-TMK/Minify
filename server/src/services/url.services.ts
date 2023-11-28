// import { nanoid } from "nanoid";
import shortid from "shortid";

export const generateShortURL = (): string => {
  // import('nanoid').then(({ nanoid }) => {
  const shortURL = shortid.generate();
  console.log(shortURL);
  return shortURL;
};
