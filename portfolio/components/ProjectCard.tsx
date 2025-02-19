import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe } from "lucide-react";

interface ProjectCardProps {
  key: any;
  title: string;
  subtitle: string;
  description: string;
  startDate: string;
  endDate: string;
  technologies: string[];
  website: string;
  image: string;
}

export function ProjectCard({
  key,
  title,
  subtitle,
  description,
  startDate,
  endDate,
  technologies,
  website,
  image,
}: ProjectCardProps) {
  console.log("ProjectCard image prop:", image); // Log the image prop

  return (
    <Card key={key} className="w-full max-w-2xl overflow-hidden">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <img src={image} alt={`${title} image`} className="w-full" />
        </div>
        <div className="space-y-2">
          <CardTitle className="text-3xl font-bold">{title}</CardTitle>
          <div className="text-sm text-muted-foreground">
            {startDate} - {endDate}
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-semibold tracking-tight">
            {subtitle}
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>
        <Button variant="outline" className="gap-2">
          <Globe className="h-4 w-4" />
          <a href={website}>Website</a>
        </Button>
      </CardContent>
    </Card>
  );
}
