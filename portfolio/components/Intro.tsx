import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AuroraText } from "./magicui/aurora-text";

import { TextAnimate } from "./magicui/text-animate";

export default function Intro() {
  return (
    <div className="max-w-4xl mx-auto px-4  py-5 md:py-16">
      <div className="flex flex-col lg:flex-col md:flex-row items-center md:justify-between gap-8 text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <Avatar className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-4 border-background shadow-xl">
            <AvatarImage
              src="https://avatars.githubusercontent.com/u/91018365?v=4"
              alt="Profile photo"
            />
            <AvatarFallback>ZK</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center items-center gap-1 ">
          <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold tracking-tight">
            Hi, I'm
          </h1>
          <h1 className="text-4xl  sm:text-5xl md:text-6xl font-bold tracking-tight">
            <AuroraText className="ml-2"> Zeeshan Khan </AuroraText>
            <span className="inline-block animate-wave origin-bottom-right ml-2">
              👋
            </span>
          </h1>
        </div>
        <div className="w-full md:w-auto">
          <TextAnimate
            className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-2xl "
            animation="blurIn"
            as="p"
          >
            Software Engineer with a passion for building impactful web
            solutions. Always learning, always creating
          </TextAnimate>
        </div>
      </div>
    </div>
  );
}
