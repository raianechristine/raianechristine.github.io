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
    padding: 3rem;
  `};
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  width: 100%;
  height: 100%;
`;

export const FlexStart = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  width: 100%;
  height: 100%;
`;

export const Div = styled.div`
  margin: ${({ margin }) => (margin ? margin : "0")};
  width: 100%;
  height: 100%;
`;

export const ToggleSection = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  left: 0;
  right: 0;
  overflow: scroll;
  background: var(--color-background-section-active);
  opacity: ${({ active }) => (active ? "1" : "0")};
  z-index: ${({ active }) => (active ? "1" : "0")};
  transition: visibility 0s 0.5s, opacity 0.5s linear;
`;

export const HideSection = styled.div`
  position: absolute;
  right: 7%;
  top: 13%;
  ${media.lessThan("medium")`
   top: 1rem;
  `};
`;
