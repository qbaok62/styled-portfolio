import { Section, SectionDivider, SectionTitle } from "@/components/atoms";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from "@/components/atoms/project";
import { projects } from "../../../constants";

export const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, pi) => (
        <BlogCard key={pi}>
          <Img src={p.image} />
          <TitleContent>
            <HeaderThree title>{p.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className="card-info">{p.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {p.tags.map((t, ti) => (
                <Tag key={ti}>{t}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={p.visit}>Code</ExternalLinks>
            <ExternalLinks href={p.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);
