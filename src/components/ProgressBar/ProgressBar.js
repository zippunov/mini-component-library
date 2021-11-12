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
  const endRadius = value === 100 ? '4px' : '0';
  value = value || 0;
  if (value > 100) {
    value = 100;
  }
  const innerWidth = `${value}%`
  return <OuterBar
            style={{'--height': height, '--padding': padding, '--radius': radius, '--end-radius': endRadius, '--inner-width': innerWidth}}
            role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100"
          >
      <InnerBar>
        <VisuallyHidden>{value + '%'}</VisuallyHidden>
      </InnerBar>
    </OuterBar>;
};

const OuterBar = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  width: 100%;
  height: var(--height);
  padding: var(--padding);
  border-radius: var(--radius);
`;

const InnerBar = styled.div`
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: var(--end-radius);
  border-bottom-right-radius: var(--end-radius);
  width: var(--inner-width);
`;

export default ProgressBar;
