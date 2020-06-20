import React, { useState, useEffect } from 'react';
import useQuery from '../../utils/hooks/useQuery';
import { db } from '../../services/firebase';

interface UserData {
  name: string;
  phoneNumber: string;
}

const ScanPage = () => {
  let query = useQuery();
  const idParam = query.get('id');
  const [id, setId] = useState<string>('1akCoUgeJjN94eTipNIHQJpDL8q1');
  const [user, setUser] = useState<UserData>();
  useEffect(() => {
    const param = idParam ?? '';
    setId(param);

    const getData = (id: string) => {
      if (id) {
        db.collection('users')
          .doc(id)
          .get()
          .then((doc) => {
            if (doc.exists) {
              const data = doc.data();
              console.log(data);
              setUser({ name: data?.fullName, phoneNumber: data?.phoneNumber });
            }
          });
      }
    };

    getData(id);
  }, [id, idParam]);
  //1akCoUgeJjN94eTipNIHQJpDL8q1

  return <div>id = {user?.name}</div>;
};

export default ScanPage;
