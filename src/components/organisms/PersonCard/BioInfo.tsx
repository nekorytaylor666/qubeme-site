import React from 'react';
import styled from 'styled-components';
import InfoItem from '../../molecules/InfoItem';
import { UserData } from '../../../shared/user.types';
import { SizedBox } from '../../molecules/InfoItem';

interface BioInfoProps {
  user: UserData;
}

const billGatesAvatarUrl =
  'https://images.squarespace-cdn.com/content/v1/56b75f108a65e2ee4f2f2bde/1455557293033-S86RZZK28KMB9LN01U0I/ke17ZwdGBToddI8pDm48kLVlQsWnKb8yQ-njTGvvwVtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpywYmA9JcIkVfR2Sj3VHhbJNNdOSzy2vOZOnpP4GuMAFuTLNfwXZswKXyR9JPuUs_s/image-asset.jpeg?format=1000w';

const BioInfo: React.FC<BioInfoProps> = ({ user }) => {
  const avatarUrl = user.avatarUrl ?? billGatesAvatarUrl;
  const quote = user.quoute ?? 'I don’t like being pooped at';
  return (
    <Horizontal>
      <div>
        <AvatarImage src={avatarUrl} alt="avatar"></AvatarImage>
      </div>
      <SizedBox width={20}></SizedBox>
      <BioContainer>
        <TitleContainer>
          <Name>{user.fullName}</Name>
          <Quote>{quote}</Quote>
        </TitleContainer>
        <div>
          <InfoItem title="Position" value={user.speciality}></InfoItem>
          <InfoItem title="Sex" value={user.sex ?? 'male'}></InfoItem>
          <InfoItem title="Age" value={user.age ?? 21}></InfoItem>
        </div>
      </BioContainer>
    </Horizontal>
  );
};

const BioContainer = styled.div`
  display: grid;
  grid-row-gap: 15px;
`;

const Quote = styled.h3`
  font-size: 1.5rem;
  font-weight: lighter;
  color: #b7b7b7;
`;

const Name = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
`;

const TitleContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const Horizontal = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  grid-column-gap: 20px;
`;

const AvatarImage = styled.img`
  border-radius: 10px;
  width: 165px;
  height: 100%;
  object-fit: cover;
`;

export default BioInfo;
