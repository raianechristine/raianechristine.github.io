import styled, { css } from "styled-components";

const hover = css`
  &:hover {
    color: var(--color-primary-hover);
  }
`;

export const Title = styled.h2`
  margin: ${({ margin }) => margin ?? "0"};
  line-height: 4.4rem;
  letter-spacing: 0.03rem;
  text-align: left;
  font-family: var(--font-family-gilroy);
  font-size: ${({ fontSize }) => fontSize ?? "5.4rem"};
  font-weight: 800;
  color: var(--color-primary);
`;

export const SubTitle = styled.h3`
  margin: ${({ margin }) => margin ?? "0"};
  line-height: 2.6rem;
  font-family: var(--font-family-gilroy);
  font-size: ${({ fontSize }) => fontSize ?? "2.0rem"};
  font-weight: bold;
  cursor: ${({ pointer }) => (pointer ? "pointer" : "initial")};
  color: ${({ primaryColor }) =>
    primaryColor ? "var(--color-primary)" : "var(--color-white)"};

  ${({ pointer }) => pointer && hover}
`;

export const Paragraph = styled.p`
  display: inline-block;
  padding: ${({ padding }) => padding ?? "0"};
  margin: ${({ margin }) => margin ?? "0"};
  text-align: ${({ textAlign }) => textAlign ?? "initial"};
  line-height: 2.8rem;
  font-size: ${({ fontSize }) => fontSize ?? "1.8rem"};
  font-weight: normal;
  color: ${({ primaryColor }) =>
    primaryColor ? "var(--color-primary)" : "var(--color-white)"};
`;

export const Link = styled.a`
  display: inline-block;
  padding: ${({ noPadding }) => (noPadding ? "0" : "0 1rem 0 0")};
  margin: ${({ margin }) => margin ?? "0"};
  cursor: pointer;
  text-align: ${({ textAlign }) => textAlign ?? "initial"};
  line-height: 1.6rem;
  font-size: ${({ fontSize }) => fontSize ?? "1.6rem"};
  font-weight: normal;
  color: var(--color-white);
  &:hover {
    color: var(--color-primary);
  }
`;

export const Color = styled.span`
  color: ${({ color }) => `var(--color-${color})`};
`;

export const Weight = styled.span`
  font-weight: ${({ weight }) => weight ?? "300"};
`;
