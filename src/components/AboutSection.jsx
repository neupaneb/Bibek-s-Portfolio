export const AboutSection = () => (
  <section id="about" className="py-14 lg:pt-20">
    <div className="container mx-auto max-w-4xl text-left">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">About</p>
      <h2 className="max-w-2xl text-3xl font-semibold md:text-4xl">I turn complex problems into practical software.</h2>

      <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-muted-foreground">
        <p>
          I&apos;m a software engineer and computer science senior at Fisk
          University with experience building full-stack applications,
          AI-powered tools, and secure data systems.
        </p>
        <p>
          Through internships and research, I&apos;ve developed software for
          healthcare operations, customer-support automation, and university
          services. I&apos;m currently researching post-quantum cryptography and
          the security challenges emerging from quantum computing.
        </p>
        <p>
          I enjoy taking products from idea to implementation; designing APIs,
          building responsive interfaces, working with databases, integrating
          AI models, and deploying reliable systems.
        </p>
      </div>

      <div className="mt-10 border-l-2 border-primary pl-5">
        <p className="font-semibold text-foreground">Fisk University</p>
        <p className="mt-1 text-sm text-muted-foreground">B.S. in Computer Science · <strong className="font-semibold text-foreground">GPA: 3.80</strong></p>
        <p className="mt-1 text-sm text-muted-foreground"><strong className="font-semibold text-foreground">Expected December 2026</strong> · Nashville, Tennessee</p>
      </div>
    </div>
  </section>
);
