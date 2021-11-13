import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <StyledSelect>
        {displayedValue}
        <SelectIcon id="chevron-down" size="20" strokeWidth="3"/>
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const NativeSelect = styled.select`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;

  &:focus {
    outline: none;
  }
`;

const StyledSelect = styled.div`
  pointer-events: none;
  position: relative;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  white-space: nowrap;
  width: min-content;
  padding:12px 52px 12px 16px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  color: ${COLORS.gray700};

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    outline: 5px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const SelectIcon = styled(Icon)`
  position: absolute;
  top: 11px;
  right: 16px;
`;

export default Select;
