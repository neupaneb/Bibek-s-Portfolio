import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const contactItems = [
  {
    label: "Email",
    value: "neupanebivek4@gmail.com",
    href: "mailto:neupanebivek4@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (318) 350-7004",
    href: "tel:+13183507004",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Nashville, TN 37208",
    icon: MapPin,
  },
];

export const ContactSection = () => (
  <section id="contact" className="border-t border-border py-14">
    <div className="container mx-auto max-w-5xl">
      <h2 className="mb-4 text-left text-3xl font-semibold md:text-4xl">
        Get In <span className="text-primary">Touch</span>
      </h2>
      <p className="mb-10 max-w-2xl text-left text-muted-foreground">
        Open to software engineering opportunities and collaborations.
      </p>

      <div className="grid max-w-2xl gap-4">
        {contactItems.map(({ label, value, href, icon: Icon }) => {
          const content = (
            <>
              <div className="rounded-md bg-slate-800 p-3"><Icon className="h-5 w-5 text-primary" /></div>
              <div className="min-w-0 text-left">
                <h3 className="font-semibold text-foreground">{label}</h3>
                <p className="mt-1 whitespace-nowrap text-sm text-muted-foreground">{value}</p>
              </div>
            </>
          );

          return href ? (
            <a key={label} href={href} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 hover:border-slate-500">
              {content}
            </a>
          ) : (
            <div key={label} className="flex items-start gap-4 rounded-lg border border-border bg-card p-5">
              {content}
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center gap-5 text-sm font-semibold">
        <a href="https://github.com/neupaneb" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-primary"><Github size={19} /> GitHub</a>
        <a href="https://linkedin.com/in/bibekneupane7" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 hover:text-primary"><Linkedin size={19} /> LinkedIn</a>
      </div>
    </div>
  </section>
);
