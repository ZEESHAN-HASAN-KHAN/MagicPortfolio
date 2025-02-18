import { Badge } from "./ui/badge";
import { SkillsModel } from "@/app/db";

async function getData() {
  const response = await SkillsModel.find({});
  console.log("Zeeshan is testing ", response);
  return response[0].skills;
}

export default async function Skills() {
  const skills = await getData();
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill: any) => (
          <Badge key={skill} className="text-sm  lg:text-xl">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
