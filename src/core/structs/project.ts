import { Link } from "./link";

export type Project = {
  id: number,
  title: string,
  summary: string,
  coverPath: string,
  links: Link[]
};
