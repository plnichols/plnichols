import React from 'react';
import { H1Styled, H2Styled, H3Styled, H4Styled, H5Styled, H6Styled } from './Heading.styles';

const Heading = ({ h1, h2, h3, h4, h5, h6, size, children }) => {
  if (h1)
    return (
      <H1Styled as="h1" {...size && { size }}>
        {children}
      </H1Styled>
    );
  if (h2)
    return (
      <H2Styled as="h2" {...size && { size }}>
        {children}
      </H2Styled>
    );
  if (h3)
    return (
      <H3Styled as="h3" {...size && { size }}>
        {children}
      </H3Styled>
    );
  if (h4)
    return (
      <H4Styled as="h4" {...size && { size }}>
        {children}
      </H4Styled>
    );
  if (h5)
    return (
      <H5Styled as="h5" {...size && { size }}>
        {children}
      </H5Styled>
    );
  if (h6)
    return (
      <H6Styled as="h6" {...size && { size }}>
        {children}
      </H6Styled>
    );

  return <H1Styled>{children}</H1Styled>;
};

export { Heading };
