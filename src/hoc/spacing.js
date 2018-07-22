import React from 'react';
import { Box } from 'components';

export function withSpacing(Component) {
  return ({ ...rest }) => {
    const spacingProps = ['m', 'mx', 'my', 'mt', 'mr', 'mb', 'ml', 'p', 'px', 'py', 'pt', 'pr', 'pb', 'pl'];
    const keysProps = Object.keys({ ...rest });

    // check if HoC component was used with spacing props
    const hasSpacingProps = keysProps.some(key => {
      return spacingProps.indexOf(key) >= 0;
    });

    if (hasSpacingProps) {
      return (
        <Box {...rest}>
          <Component />
        </Box>
      );
    } else {
      return <Component />;
    }
  };
}
