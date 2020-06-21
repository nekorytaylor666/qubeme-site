import React from 'react';
import { UserData } from '../../../shared/user.types';
import InfoItem from '../../molecules/InfoItem';
import styled from 'styled-components';

interface PersonCardProps {
  user: UserData;
}

const PersonCard: React.FC<PersonCardProps> = ({ user }) => {
  return (
    <Wrapper>
      <Pane>
        <InfoItem title="Full name" value={user.fullName}></InfoItem>
        <InfoItem title="Email" value={user.email}></InfoItem>
        <InfoItem title="Phone number" value={user.phoneNumber}></InfoItem>
        <InfoItem title="Speciality" value={user.speciality}></InfoItem>
      </Pane>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Pane = styled.div`
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  display: grid;
  row-gap: 10px;
  padding: 10px;
  max-width: 100%;
`;

export default PersonCard;
