import styled from "styled-components";
import media from "styled-media-query";

import myPhoto from "assets/images/myPhoto.jpg";

export const Photo = styled.div`
  margin: 0 auto;
  width: 20rem;
  height: 20rem;
  background: url(${myPhoto});
  background-size: cover;
  border-radius: 50%;
`;
