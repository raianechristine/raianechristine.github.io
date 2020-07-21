import styled from "styled-components";
import media from "styled-media-query";

import { ReactComponent as IconCoffee } from "assets/svg/coffee.svg";

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 1rem;
  z-index: 2;
  background: transparent;
  ${media.lessThan("medium")`
    z-index: 0;
  `};
`;

export const SignatureText = styled.span`
  display: flex;
  align-items: center;
  font-size: 1rem;
  color: var(--color-primary);
`;

export const Icon = styled(IconCoffee)`
  margin-left: 1rem;
  width: 16px;
  height: auto;
`;
