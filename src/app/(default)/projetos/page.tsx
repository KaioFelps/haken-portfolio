import { ProjectCard } from "@/components/project-card";
import { DataStore } from "@/core/datastore";

export default function ProjectsPage() {
  const projects = DataStore.getProjects();

  return (
    <main className="
        flex-1 max-w-[1312px] w-[calc(100%_-_48px)] mx-auto flex flex-col justify-center
        "
    >
      <h1 className="heading mb-16">Projetos</h1>

      <div className="flex flex-col gap-6">
        {projects.map(ProjectCard)}
      </div>
    </main>
  );
}
