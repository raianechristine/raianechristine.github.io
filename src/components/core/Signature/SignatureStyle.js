import styled from "styled-components";

import { ReactComponent as IconCoffee } from "assets/svg/coffee.svg";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1.5rem;
  right: 0;
  left: 0;
  z-index: 2;
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
