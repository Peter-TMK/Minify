export type UrlPayLoadType = {
  // urlCode: string;
  originalLink: string;
  name?: string;
};

export type UrlType = {
  id?: string;
  urlCode: string;
  originalLink: string;
  clicks: number;
  createdAt: string;
  updatedAt: string;
  name?: string;
  // userId: string;
};
