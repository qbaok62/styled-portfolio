import {
  LeftSection,
  Section,
  SectionText,
  SectionTitle,
} from "@/components/atoms";
import { CustomedButton } from "@/components/molecules/button";

export interface IHeroProps extends React.HTMLProps<HTMLButtonElement> {}

export const Hero = (props: IHeroProps) => {
  const { onClick } = props;

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>
        <CustomedButton onClick={onClick}>Learn More</CustomedButton>
      </LeftSection>
    </Section>
  );
};
