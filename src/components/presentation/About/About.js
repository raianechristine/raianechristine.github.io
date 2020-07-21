import React from "react";
import PropTypes from "prop-types";

import urls from "utils/constants/urls";

import { Section, FlexStart, Div, HideSection } from "components/core/Grid";
import {
  Title,
  Paragraph,
  SubTitle,
  Color,
  Link,
} from "components/core/Typography";

const About = ({ showSection, setShowSection }) => (
  <Section>
    <FlexStart>
      <Title margin="0 0 4rem">
        about me<Color color="white">.</Color>
      </Title>

      <HideSection>
        <SubTitle
          primaryColor
          pointer
          onClick={() => setShowSection(!showSection)}
        >
          close<Color color="white">.</Color>
        </SubTitle>
      </HideSection>

      <Paragraph>
        I'm graduated in Systems Analysis and Development, passionate about
        technology and Front-End development.
      </Paragraph>
      <Paragraph>
        I currently work at{" "}
        <Link href={urls.LINKS.work} noPadding>
          @ioasys
        </Link>{" "}
        with development in ReactJS.
      </Paragraph>

      <Div margin="2rem 0 0 0">
        <SubTitle primaryColor margin="2rem 0">
          What I know:
        </SubTitle>
        <Paragraph>
          ReactJs, React Native, Styled Component, Hooks, Unit Testing,
          Javascript, CSS/SASS.
        </Paragraph>
      </Div>

      <Div margin="2rem 0 0">
        <FlexStart>
          <SubTitle primaryColor margin="2rem 0">
            Facts<Color color="white">:</Color>
          </SubTitle>
          <Paragraph>
            I'm currently learning English, NodeJs and React Native
          </Paragraph>
          <Paragraph>I have a beautiful 70s blue beetle</Paragraph>
          <Paragraph>I have a great passion for Canada</Paragraph>
          <Paragraph>I collect miniatures of games and drawings</Paragraph>
          <Paragraph>I'm a big fan of Pink Floyd</Paragraph>
          <Paragraph>I love creating drawings with CSS</Paragraph>
        </FlexStart>
      </Div>

      <Div margin="2rem 0">
        <SubTitle primaryColor margin="2rem 0">
          Connect with me<Color color="white">:</Color>
        </SubTitle>
        <Link href={urls.LINKS.linkedin}>{"<Linkedin />"}</Link>
        <Link href={urls.LINKS.github}>{"<Github />"}</Link>
        <Link href={urls.LINKS.medium}>{"<Medium />"}</Link>
      </Div>
    </FlexStart>
  </Section>
);

About.propTypes = {
  setShowSection: PropTypes.func.isRequired,
  showSection: PropTypes.bool,
};

About.defaultProps = {
  showSection: true,
};

export default About;
