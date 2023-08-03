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
          {"Well, There's nothning to say yet. I'll be right back"}
        </SectionText>
        <CustomedButton onClick={onClick}>Learn More</CustomedButton>
      </LeftSection>
    </Section>
  );
};
