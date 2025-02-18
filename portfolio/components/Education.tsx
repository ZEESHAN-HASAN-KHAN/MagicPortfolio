// Note: This is the Education component that will be used to display the education information on the website.
//       It will be used to display the education information on the website.
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { EducationModel } from "../app/db";

async function getEducation() {
  const education = await EducationModel.find({});
  return education;
}

export default async function Education() {
  const education = await getEducation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-left w-full">
        Educations
      </h2>

      <div className="space-y-8">
        {education.map((edu, i) => (
          <div key={i} className="flex items-center gap-6">
            <Avatar className="h-12 w-12 lg:h-16 lg:w-16">
              <AvatarImage src={edu.logo} alt={edu.school} />
              <AvatarFallback className="bg-primary/10">
                {edu.school.substring(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-md lg:text-xl font-semibold">{edu.school}</h3>
              <p className="text-[12px] lg:text-lg text-muted-foreground">
                {edu.degree} in {edu.fieldOfStudy}
              </p>
              {/* <p className="text-[10px] lg:text-lg text-muted-foreground">
                {edu.description}
              </p> */}
            </div>

            <div className="text-right">
              <p className="text-muted-foreground">
                {edu.joinDate} - {edu.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
