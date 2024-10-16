import { Project } from "./structs/project";

type DataStorage = {
  projects: Project[]
};

export abstract class DataStore {
  private static data: DataStorage;
  private static hasInitialized: boolean = false;

  public static async initialize() {
    if (this.hasInitialized) return;

    const { default: _, ...data } = await import("crate/datastore/data.json");

    this.hasInitialized = true;
    this.data = (data as DataStorage);
  }

  public static async getProjects(): Promise<Project[]> {
    await this.guaranteeInitialization();
    return this.data.projects;
  }

  private static async guaranteeInitialization() {
    if (!this.hasInitialized) await this.initialize();
  }
}
