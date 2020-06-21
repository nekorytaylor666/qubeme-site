import React from 'react';
import styled from 'styled-components';

interface InfoItemProps {
  value: string;
  title: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ title, value }) => {
  return (
    <Wrapper>
      <PropertyTitle>{title}:</PropertyTitle>
      <SizedBox width={10}></SizedBox>
      <PropertyValue>{value}</PropertyValue>
    </Wrapper>
  );
};

interface SizedBoxProps {
  width?: number;
}

const SizedBox = styled.div`
  width: ${(props: SizedBoxProps) => props.width ?? 10}px;
`;

const PropertyTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: black;
`;

const PropertyValue = styled.span`
  font-size: 1rem;
  color: black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export default InfoItem;
