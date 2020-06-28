import React from 'react';
import styled from 'styled-components';

interface InfoItemProps {
  value: string | number;
  title: string;
  gap?: number;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value, gap }) => {
  return (
    <Wrapper>
      <PropertyTitle>{title}:</PropertyTitle>
      <SizedBox width={gap ?? 10}></SizedBox>
      <PropertyValue>{value}</PropertyValue>
    </Wrapper>
  );
};

interface SizedBoxProps {
  width?: number;
}

export const SizedBox = styled.div`
  width: ${(props: SizedBoxProps) => props.width ?? 10}px;
`;

const PropertyTitle = styled.span`
  font-size: 1.5rem;
  color: black;
  font-weight: lighter;
`;

const PropertyValue = styled.span`
  font-size: 1.5rem;
  color: black;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default InfoItem;
