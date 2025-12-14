export interface Inoticia {
  title: string;
  description: string;
  image: string; 
  url: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
}