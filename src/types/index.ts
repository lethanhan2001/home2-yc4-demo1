export interface Services {
  id: number;
  name: string;
  image: string;
  title: string;
}

export interface Profess extends Services {
  username: string;
}
