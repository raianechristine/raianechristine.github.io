import React from "react";

import Signature from "components/core/Signature";
import { Main, Container } from "./LayoutStyle";

const Layout = ({ children }) => (
  <Main>
    <Container>
      {children}
      <Signature />
    </Container>
  </Main>
);

export default Layout;
