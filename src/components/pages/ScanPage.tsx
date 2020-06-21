import React, { useState, useEffect } from 'react';
import useQuery from '../../utils/hooks/useQuery';
import { db } from '../../services/firebase';
import { UserData } from '../../shared/user.types';
import PersonCard from '../organisms/PersonCard';

const ScanPage = () => {
  let query = useQuery();
  const idParam = query.get('id');
  const [user, setUser] = useState<UserData>();
  const [error, setError] = useState('');
  useEffect(() => {
    const param = idParam ?? '';
    const getData = async (id: string) => {
      let data;
      if (id) {
        const doc = await db.collection('users').doc(id).get();
        if (doc.exists) {
          data = doc.data();
        }
        if (data) {
          setError('');
          return data;
        }
        if (!data) {
          setError('no data for this id');
        }
      }
      if (!id) {
        setError('Id is required!');
      }
      return data;
    };
    const setUserData = async () => {
      const data = await getData(param);
      if (data) {
        setUser({
          fullName: data.fullName,
          cardId: data.cardId,
          cardName: data.cardName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          speciality: data.speciality,
          uid: data.uid,
        });
      }
    };
    setUserData();
  }, [idParam]);
  //1akCoUgeJjN94eTipNIHQJpDL8q1

  return (
    <div>
      {error ?? ''}
      {user ? <PersonCard user={user} /> : null}
    </div>
  );
};

export default ScanPage;
