import { nanoid } from "nanoid";

export const generateShortURL = (): string => {
  // import('nanoid').then(({ nanoid }) => {
  const shortURL = nanoid(8);
  console.log(shortURL);
  return `https:short.url/${shortURL}`;
};
