import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[380px_1fr] lg:gap-12 xl:grid-cols-[430px_1fr] xl:gap-20">
        <HeroSection />
        <main className="min-w-0 px-6 lg:px-0 lg:pr-10 xl:pr-16">
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
};
