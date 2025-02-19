import { ProjectCard } from "./ProjectCard";
import { ProjectModel } from "@/app/db";
import { Badge } from "./ui/badge";
async function fetchProjects() {
  const response = await ProjectModel.find();
  return response;
}
export default async function Projects() {
  const projects = await fetchProjects();
  console.log("Fetched projects:", projects); // Add this line to log the fetched projects

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16 text-center">
      {/* <div className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm md:text-base font-medium mb-6">
        My Projects
      </div> */}
      <Badge className="text-xl lg:text-2xl">My Projects</Badge>
      <h2 className="text-xl lg:text-4xl md:text-6xl font-bold mb-6 mt-2 tracking-tight">
        Check out my latest work
      </h2>
      <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
        I've worked on a variety of projects, from simple websites to complex
        web applications. Here are a few of my favorites.
      </p>
      <p>Here&apos;s a list of my projects:</p>
      <div className="mt-4 grid grid-col-1 gap-4 lg:grid lg:grid-cols-2 ">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
            startDate={project.startDate}
            endDate={project.endDate}
            technologies={project.technologies}
            website={project.website}
            image={project.image}
            projectId={project._id}
          />
        ))}
      </div>
    </div>
  );
}
