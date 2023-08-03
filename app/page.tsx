import { Section } from "@/components/atoms";
import { BackgroundAnimation } from "@/components/molecules";
import {
  Acomplishments,
  Hero,
  Projects,
  Technologies,
  Timeline,
} from "@/components/organisms";

export default function Home() {
  return (
    <main>
      <Section grid>
        <Hero />
        <BackgroundAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </main>
  );
}
