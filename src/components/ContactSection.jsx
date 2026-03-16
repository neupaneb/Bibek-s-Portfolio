import {
  Mail,
  Github,
  MapPin,
  Phone,
  Send,
  Linkedin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL?.trim() || "/api/contact";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openMailClient = ({ name, email, message }) => {
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:neupanebibek4464@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: data.message || "Your message has been delivered.",
        });
        e.target.reset();
      } else {
        toast({
          title: "Error",
          description: data.error || "Something went wrong.",
          variant: "destructive",
        });
      }
    } catch (error) {
      openMailClient(formData);
      toast({
        title: "Email app opened",
        description:
          "The form backend is unavailable, so your mail app was opened with the message filled in.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 text-left">
                <div className="shrink-0 rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:neupanebibek4464@gmail.com"
                    className="break-all text-muted-foreground transition-colors hover:text-primary sm:break-normal"
                  >
                    neupanebibek4464@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 text-left">
                <div className="shrink-0 rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+13183507004"
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    +1 (318) 350-7004
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-border/50 bg-card/50 p-4 text-left">
                <div className="shrink-0 rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">
                    Nashville, TN 37208
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://linkedin.com/in/bibekneupane7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://github.com/neupaneb"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github />
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="bg-card p-8 rounded-2xl border border-border/60 shadow-xl shadow-black/5">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Bibek Neupane"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button group w-full flex items-center justify-center gap-2",
                  "disabled:cursor-not-allowed disabled:opacity-80"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send
                  size={16}
                  className={cn(
                    "transition-transform duration-300",
                    !isSubmitting && "group-hover:translate-x-0.5"
                  )}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
