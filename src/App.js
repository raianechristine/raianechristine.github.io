import React from "react";

import Routes from "routes";
import Layout from "components/core/Layout";
import GlobalStyle from "./style/globalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Layout>
      <Routes />
    </Layout>
  </>
);

export default App;
