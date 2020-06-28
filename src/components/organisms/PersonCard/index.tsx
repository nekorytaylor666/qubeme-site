import React from 'react';
import { UserData } from '../../../shared/user.types';
import styled from 'styled-components';
import BioInfo from './BioInfo';
import { CategoryTitle } from '../../atoms/CategoryTitle/index';
import InfoItem from '../../molecules/InfoItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

interface PersonCardProps {
  user: UserData;
}

const PersonCard: React.FC<PersonCardProps> = ({ user }) => {
  return (
    <Wrapper>
      <Pane>
        <PaneContainer>
          <div>
            <BioInfo user={user}></BioInfo>
            <div style={{ width: 'fit-content' }}>
              <CategoryTitle>About</CategoryTitle>
              <AboutText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et unde quas accusamus quo officiis cumque,
                dolores nemo? Quis quisquam, voluptatem consequatur, nesciunt ea nobis magnam asperiores aut distinctio
                a temporibus!
              </AboutText>
            </div>
          </div>
          <AdditionalContainer>
            <ContactsContainer>
              <div>
                <CategoryTitle>Contacts</CategoryTitle>
                <InfoItem title="E-mail" value="massalin@inbox.ru"></InfoItem>
                <InfoItem title="Phone" value="+77019998892"></InfoItem>
              </div>
              <div>
                <CategoryTitle>Social Media</CategoryTitle>
                <InfoItem title="Instagram" value="@isasasasasas"></InfoItem>
                <InfoItem title="VK" value="@isasasasasas"></InfoItem>
              </div>
            </ContactsContainer>
            <ActionsContainer>
              <Circle>
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#6550F7"></FontAwesomeIcon>
              </Circle>
              <Circle>
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#6550F7"></FontAwesomeIcon>
              </Circle>
              <Circle>
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#6550F7"></FontAwesomeIcon>
              </Circle>
              <Circle>
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" color="#6550F7"></FontAwesomeIcon>
              </Circle>
            </ActionsContainer>
          </AdditionalContainer>
        </PaneContainer>
      </Pane>
    </Wrapper>
  );
};

const Circle = styled.div`
  padding: 10px;
  border-radius: 100px;
  background-color: white;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
`;

const ActionsContainer = styled.div`
  min-width: 50px;
  display: grid;
  align-items: center;
  justify-content: center;
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
`;

const AboutText = styled.p`
  font-size: 24px;
  font-weight: lighter;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px;
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
