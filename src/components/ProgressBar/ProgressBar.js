/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const heights = {
  'small': '8px',
  'medium': '12px',
  'large': '24px'
};

const paddings = {
  'small': '0',
  'medium': '0',
  'large': '4px'
}

const radiuses = {
  'small': '4px',
  'medium': '4px',
  'large': '8px'
}

const ProgressBar = ({ value, size }) => {
  const height = heights[size.toLowerCase()] || '8px';
  const padding = paddings[size.toLowerCase()] || '0';
  const radius = radiuses[size.toLowerCase()] || '4px';
  value = value || 0;
  if (value > 100) {
    value = 100;
  }
  return <OuterBar
            style={{'--height': height, '--padding': padding, '--radius': radius, '--inner-width': `${value}%`}}
            role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"
          >
      <InnerBarWrapper>
        <InnerBar>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerBar>
      </InnerBarWrapper>
    </OuterBar>;
};

const OuterBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
`;

const InnerBarWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBar = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  width: var(--inner-width);
`;

export default ProgressBar;
