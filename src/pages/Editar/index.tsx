import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import Cadastro from '../../components/Cadastro';

interface Params {
  idNave: string;
}

interface User {
  id: string;
  name: string;
  birthdate: string;
  admission_date: string;
  job_role: string;
  project: string;
  url: string;
}

const Editar: React.FC = () => {
  const [user, setUser] = useState<User>({} as User);
  const { idNave } = useParams<Params>();

  useEffect(() => {
    api.get(`navers/${idNave}`).then(res => {
      const {
        data: { id, name, birthdate, admission_date, job_role, project, url },
      } = res;

      const result = {
        id,
        name,
        birthdate,
        admission_date,
        job_role,
        project,
        url,
      };
      setUser(result);
    });
  }, [idNave]);

  return (
    <>
      <Cadastro user={user} screenName="Editar Naver" />
    </>
  );
};

export default Editar;
