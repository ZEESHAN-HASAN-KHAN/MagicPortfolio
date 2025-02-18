import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CertificationModel } from "@/app/db";
import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

async function fetchCertificates() {
  const response = await CertificationModel.find();
  return response;
}

export default async function Certificates() {
  const certificates = await fetchCertificates();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-left w-full">
        Certificates
      </h2>

      <div className="space-y-8">
        {certificates.map((cert, i) => (
          <div key={i} className="flex items-center gap-6">
            <Avatar className="h-12 w-12 lg:h-16 lg:w-16">
              <AvatarImage src={cert.logo} alt={cert.authority} />
              <AvatarFallback className="bg-primary/10">
                {cert.authority.substring(0, 2)}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h3 className="tex-md lg:text-xl font-semibold">
                {cert.authority}
              </h3>
              <p className="text-[12px] lg:text-lg text-muted-foreground">
                {cert.name}
              </p>
              <p className="text-[10px] lg:text-md text-muted-foreground">
                Credential ID: {cert.credentialId}
              </p>
            </div>

            <div className="text-right">
              <p className="text-sm text-muted-foreground">{cert.issueDate}</p>
              <Button size="sm" variant="outline" className="gap-2" asChild>
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  Show credential
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
