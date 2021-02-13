import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const TextStyleVariant = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize}
    font-weight: ${({ theme }) =>
      theme.typographyVariants.paragraph1.fontWeight}
    font-height: ${({ theme }) =>
      theme.typographyVariants.paragraph1.lineHeight}
    `,
  smallestException: css`
    font-size: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontSize}
    font-weight: ${({ theme }) =>
      theme.typographyVariants.smallestException.fontWeight}
    font-height: ${({ theme }) =>
      theme.typographyVariants.smallestException.lineHeight}
    `,
};

const TextBase = styled.span`
  ${(props) => TextStyleVariant[props.variant]}
`;

export default function Text({ tag, variant, children }) {
  return (
    <TextBase as={tag} variant={variant}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: "span",
  variant: "paragraph1",
};
