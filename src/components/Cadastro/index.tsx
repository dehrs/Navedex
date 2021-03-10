import React, { useState, FormEvent, useEffect } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { useModalAlert } from '../../hooks/ModalAlert';
import formatDate from '../../utils/formatDate';

import Header from '../Header';

import { Container, Content } from './styles';

interface User {
  name: string;
  birthdate: string;
  job_role: string;
  project: string;
  url: string;
  admission_date: string;
}

interface EditData {
  user?: {
    id: string;
    name: string;
    birthdate: string;
    job_role: string;
    project: string;
    url: string;
    admission_date: string;
  };
  screenName: string;
}

const Cadastro: React.FC<EditData> = ({ user, screenName }: EditData) => {
  const { addModalAlert } = useModalAlert();
  const [userData, setUserData] = useState<User>({} as User);
  const history = useHistory();

  useEffect(() => {
    if (user) {
      const { url, admission_date, birthdate, job_role, name, project } = user;
      const data = { url, admission_date, birthdate, job_role, name, project };
      setUserData(data);
    }
  }, [user]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (user) {
      userData.admission_date = formatDate(userData.admission_date);
      userData.birthdate = formatDate(userData.birthdate);

      const payload = {
        ...userData,
      };
      api
        .put(`navers/${user.id}`, payload)
        .then(res => {
          addModalAlert({
            title: 'Naver atualizado',
            message: 'Naver atualizado com sucesso!',
          });
          history.push('/home');
        })
        .catch(error => {
          addModalAlert({
            title: 'Error',
            message: 'Não Possível Realizar as alterações!',
          });
        });
    } else {
      userData.admission_date = formatDate();
      userData.birthdate = formatDate();
      const payload = {
        ...userData,
      };
      api.post('navers', payload).then(res => {
        addModalAlert({
          title: 'Naver criado',
          message: 'Naver criado com sucesso!',
        });
        history.push('/home');
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="tamanho-form">
          <div className="topo-page">
            <Link to="/home">
              <FaAngleLeft size={24} />
            </Link>
            <h3>{screenName}</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid-2_xs-1">
              <div className="col">
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={userData.name}
                  placeholder="Nome"
                  onChange={e =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <label htmlFor="cargo">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  defaultValue={userData.job_role}
                  placeholder="Cargo"
                  onChange={e =>
                    setUserData({ ...userData, job_role: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <label htmlFor="idade">Idade</label>
                <input
                  type="text"
                  id="idade"
                  name="idade"
                  defaultValue={userData.birthdate}
                  placeholder="Idade"
                  onChange={e =>
                    setUserData({ ...userData, birthdate: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <label htmlFor="tempoEmpresa">Tempo de Empresa</label>
                <input
                  type="text"
                  id="tempoEmpresa"
                  name="tempoEmpresa"
                  defaultValue={userData.admission_date}
                  placeholder="Tempo de Empresa"
                  onChange={e =>
                    setUserData({ ...userData, admission_date: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <label htmlFor="projeto">Projetos que participou</label>
                <input
                  type="text"
                  id="projeto"
                  name="projeto"
                  defaultValue={userData.project}
                  placeholder="Projetos que participou"
                  onChange={e =>
                    setUserData({ ...userData, project: e.target.value })
                  }
                />
              </div>
              <div className="col">
                <label htmlFor="foto">URL da foto do Naver</label>
                <input
                  type="text"
                  id="foto"
                  name="foto"
                  defaultValue={userData.url}
                  placeholder="URL da foto do Naver"
                  onChange={e =>
                    setUserData({ ...userData, url: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="div-btn-salvar">
              <button type="submit" className="btn-salvar">
                Salvar
              </button>
            </div>
          </form>
        </div>
      </Content>
    </Container>
  );
};

export default Cadastro;
