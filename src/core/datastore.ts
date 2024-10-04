import { Project } from "./structs/project";

type DataStorage = {
  projects: Project[]
};

export abstract class DataStore {
  private static data: DataStorage;

  public static async initialize() {
    const { default: _, ...data } = await import("crate/datastore/data.json");

    this.data = (data as DataStorage);
  }

  public static getProjects(): Project[] {
    return this.data.projects;
  }
}
