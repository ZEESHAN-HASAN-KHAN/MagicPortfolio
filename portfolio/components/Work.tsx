// // import { Avatar } from "@radix-ui/react-avatar";
// import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
// import { WorkModel } from "../app/db";
// async function getWorkExperience() {
//   const workExperience = await WorkModel.find({});
//   return workExperience;
// }
// export default async function Work() {
//   // We need to add accordion whenever we hover Company name it should show the details of the company work
//   // We need to fetch the data from the database and show it here
//   const workExperience = await getWorkExperience();

//   return (
//     <div className="m-10">
//       <h1>Work Experience</h1>

//       {workExperience.map((experience, i) => (
//         <div key={i}>
//           <div className="flex flex-row justify-between items-center">
//             <Avatar className="w-20 h-20">
//               <AvatarImage src={experience.logo} />
//               <AvatarFallback>{experience.company}</AvatarFallback>
//             </Avatar>
//             <div>
//               <p>{experience.company}</p>
//               <p>{experience.position}</p>
//               <p>{experience.description}</p>
//             </div>
//             <div>
//               <p>{experience.joinDate}</p>
//               <p>{experience.endDate}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkModel } from "../app/db";

async function getWorkExperience() {
  const workExperience = await WorkModel.find({});
  return workExperience;
}

export default async function Work() {
  const workExperience = await getWorkExperience();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-left w-full">
        Work Experience
      </h2>

      <div className="space-y-8">
        {workExperience.map((experience, i) => (
          <div key={i} className="flex items-center gap-6">
            <Avatar className="h-12 w-12 lg:h-16 lg:w-16">
              <AvatarImage src={experience.logo} alt={experience.company} />
              <AvatarFallback className="bg-primary/10">
                {experience.company.substring(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="text-lg lg:text-xl font-semibold">
                {experience.company}
              </h3>
              <p className="text-sm lg:text-lg text-muted-foreground">
                {experience.position}
              </p>
            </div>

            <div className="text-right">
              <p className="text-muted-foreground">
                {experience.joinDate} - {experience.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
