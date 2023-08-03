import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "@/components/atoms";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "@/components/atoms/list";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";

export const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      {
        "I've worked with a range a technologies in the web development world. From Back-end To Front-end"
      }
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            Reactjs <br />
            Nextjs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Nodejs <br />
            ExpressJs <br />
            Nestjs
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiZend size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Database Management</ListTitle>
          <ListParagraph>
            Experience with <br />
            MySQL <br />
            Microsoft SQL Server <br />
            PostgressQL <br />
            mongodb
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);
