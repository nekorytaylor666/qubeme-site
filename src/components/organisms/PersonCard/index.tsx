import React from 'react';
import { UserData } from '../../../shared/user.types';
import styled from 'styled-components';
import BioInfo from './BioInfo';
import { CategoryTitle } from '../../atoms/CategoryTitle/index';
import InfoItem from '../../molecules/InfoItem';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../../shared/mediaQueries';
import CircleIcons from '../../atoms/ClickableCircleIcons/index';

interface PersonCardProps {
  user: UserData;
}

const PersonCard: React.FC<PersonCardProps> = ({ user }) => {
  console.log(user.email);
  return (
    <Wrapper>
      <Pane>
        <PaneContainer>
          <div>
            <BioInfo user={user}></BioInfo>
            <div style={{ width: 'fit-content' }}>
              {user.bio && (
                <React.Fragment>
                  <CategoryTitle>About</CategoryTitle>
                  <AboutText>{user.bio}</AboutText>
                </React.Fragment>
              )}
            </div>
          </div>
          <AdditionalContainer>
            <ContactsContainer>
              <div>
                <CategoryTitle>Contacts</CategoryTitle>
                <InfoItem title="E-mail" value={user.email}></InfoItem>
                <InfoItem title="Phone" value={user.phoneNumber}></InfoItem>
              </div>
              {
                //   <div>
                //   <CategoryTitle>Social Media</CategoryTitle>
                //   <InfoItem title="Instagram" value="@isasasasasas"></InfoItem>
                //   <InfoItem title="VK" value="@isasasasasas"></InfoItem>
                // </div>
              }
            </ContactsContainer>
            <ActionsContainer>
              <CircleIcons icon={faPhoneAlt} type="phone" phone={user.phoneNumber}></CircleIcons>
              <CircleIcons icon={faEnvelope} type="email" email={user.email}></CircleIcons>
            </ActionsContainer>
          </AdditionalContainer>
        </PaneContainer>
      </Pane>
    </Wrapper>
  );
};

const ActionsContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;

  @media ${device.mobileL} {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
  }
`;

const AdditionalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ContactsContainer = styled.div`
  display: grid;
  align-items: flex-start;
  grid-row-gap: 20px;
`;

const PaneContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.p`
  font-size: 24px;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
  @media ${device.mobileL} {
    padding: 0;
  }
`;

const Pane = styled.div`
  -webkit-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  row-gap: 10px;
  padding: 20px;
`;

export default PersonCard;
