import styled from "styled-components";
import media from "styled-media-query";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 10rem;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  transition: visibility 0s 0.5s, opacity 0.5s linear;

  ${media.lessThan("medium")`
      padding: 5rem 3rem;
  `};
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  flex-direction: ${({ row }) => (row ? "row" : "column")};

  ${media.lessThan("medium")`
      flex-direction: column;
  `};
`;

export const FlexStart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  flex-direction: ${({ row }) => (row ? "row" : "column")};
`;

export const Div = styled.div`
  height: 100%;

  margin: ${({ margin }) => margin ?? "0"};
  padding: ${({ padding }) => padding ?? "0"};
  width: ${({ width }) => width ?? "100%"};

  ${media.lessThan("medium")`
     width: 100%;
  `};
`;

export const ToggleSection = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  background: var(--black-rbg);
  transition: visibility 0s 0.5s, opacity 0.5s linear;

  opacity: ${({ active }) => (active ? "1" : "0")};
  z-index: ${({ active }) => (active ? "1" : "0")};

  ${media.lessThan("medium")`
      overflow-y: scroll;
  `};
`;

export const HideSection = styled.div`
  position: absolute;
  right: 7%;
  top: 13%;

  ${media.lessThan("medium")`
    top: 1rem;
  `};
`;
