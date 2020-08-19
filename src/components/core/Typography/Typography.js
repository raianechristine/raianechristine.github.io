import styled, { css } from "styled-components";

const hover = css`
  &:hover {
    color: var(--primary-hover);
  }
`;

export const Title = styled.h2`
  line-height: 4.4rem;
  letter-spacing: 0.03rem;
  text-align: left;
  font-family: var(--font-family-gilroy);
  font-weight: 800;
  color: var(--primary);

  margin: ${({ margin }) => margin ?? "0"};
  font-size: ${({ fontSize }) => fontSize ?? "7.4rem"};
`;

export const SubTitle = styled.h3`
  line-height: 2.6rem;
  font-family: var(--font-family-gilroy);
  font-weight: bold;

  margin: ${({ margin }) => margin ?? "0"};
  text-align: ${({ textAlign }) => textAlign ?? "initial"};
  font-size: ${({ fontSize }) => fontSize ?? "2.0rem"};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "initial")};
  color: ${({ primaryColor }) =>
    primaryColor ? "var(--primary)" : "var(--white)"};

  ${({ pointer }) => pointer && hover}
`;

export const Paragraph = styled.p`
  line-height: 2.8rem;
  font-weight: normal;

  display: ${({ display }) => display ?? "inline-block"};
  padding: ${({ padding }) => padding ?? "0"};
  margin: ${({ margin }) => margin ?? "0"};
  text-align: ${({ textAlign }) => textAlign ?? "initial"};
  font-size: ${({ fontSize }) => fontSize ?? "1.8rem"};
  color: ${({ primaryColor }) =>
    primaryColor ? "var(--primary)" : "var(--white)"};
`;

export const Link = styled.a`
  display: inline-block;
  cursor: pointer;
  line-height: 1.6rem;
  font-weight: normal;
  color: var(--white);

  padding: ${({ noPadding }) => (noPadding ? "0" : "0 1rem 0 0")};
  margin: ${({ margin }) => margin ?? "0"};
  text-align: ${({ textAlign }) => textAlign ?? "initial"};
  font-size: ${({ fontSize }) => fontSize ?? "1.6rem"};

  &:hover {
    color: var(--primary-hover);
  }
`;

export const Color = styled.span`
  color: ${({ color }) => `var(--${color})`};
`;

export const Weight = styled.span`
  font-weight: ${({ weight }) => weight ?? "300"};
`;
