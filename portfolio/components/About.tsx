export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
      <h2 className="text-2xl lg:text-4xl font-bold mb-6">About Me</h2>
      <div className="space-y-4 text-lg text-muted-foreground">
        <p>
          I&apos;m a dedicated software engineer currently working at{" "}
          <a
            href="#"
            className="underline font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            CGI
          </a>
          , where I specialize in web development and building scalable
          applications. My expertise includes{" "}
          <span className="font-medium text-foreground">
            React, Node.js, MongoDB, and ServiceNow
          </span>
          .
        </p>
        <p>
          At CGI, I&apos;ve contributed to projects involving{" "}
          <span className="font-medium text-foreground">
            ServiceNow UI development, workflow automation, email notifications,
            SLA management, and catalog item creation
          </span>
          . I also have experience working with{" "}
          <span className="font-medium text-foreground">
            Spring Boot and Angular
          </span>
          , enabling me to develop full-stack solutions.
        </p>
        <p>
          I&apos;m always eager to learn new technologies, work on innovative
          projects, and collaborate with like-minded professionals. Whether
          it&apos;s optimizing workflows or building user-friendly applications,
          I strive to create impactful solutions.
        </p>
      </div>
    </div>
  );
}
