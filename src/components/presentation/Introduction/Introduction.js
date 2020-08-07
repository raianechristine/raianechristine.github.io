import React, { useState } from "react";

import { Section, FlexCenter, ToggleSection } from "components/core/Grid";
import { Title, SubTitle, Color } from "components/core/Typography";
import About from "components/presentation/About";

const Introduction = () => {
  const [showSection, setShowSection] = useState(false);

  return (
    <>
      <Section>
        <FlexCenter>
          <Title margin="0 0 4rem 0">
            Hi<Color color="white">.</Color>
          </Title>
          <SubTitle>I'm Raiane Christine and </SubTitle>
          <SubTitle primaryColor fontSize="2.6rem">
            Front-End Developer
          </SubTitle>

          <SubTitle
            primaryColor
            pointer
            margin="4rem 0"
            onClick={() => setShowSection(true)}
          >
            {"< about me />"}
          </SubTitle>
        </FlexCenter>
      </Section>

      <ToggleSection active={showSection}>
        <About setShowSection={setShowSection} showSection={showSection} />
      </ToggleSection>
    </>
  );
};

export default Introduction;
