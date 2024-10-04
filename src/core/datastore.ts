import { Project } from "./structs/project";

type DataStorage = {
  projects: Project[]
};

export class DataStore {
  private data: DataStorage;
  private constructor(data: DataStorage) {
    this.data = data;
  }

  public static async initialize() {
    const { default: _, ...data } = await import("crate/datastore/data.json");

    return new DataStore(data as DataStorage);
  }

  public getProjects(): Project[] {
    return this.data.projects;
  }
}
