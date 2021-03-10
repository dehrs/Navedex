import React, { useEffect, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import api from '../../services/api';
import { useModalData } from '../../hooks/ModalData';
import { useModalDialog } from '../../hooks/ModalDialog';

import { Container, Content } from './styles';

interface NaversData {
  id: string;
  name: string;
  job_role: string;
  url: string;
}

const Home: React.FC = () => {
  const [navers, setNavers] = useState<NaversData[]>([]);
  const history = useHistory();
  const { addModalData } = useModalData();
  const { addModalDialog } = useModalDialog();

  useEffect(() => {
    api.get('navers').then(res => {
      setNavers(res.data);
    });
  }, []);

  function handleDelete(id: string) {
    addModalDialog({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      id,
      onSuccess: naveId => {
        setNavers(navers.filter(naver => naver.id !== naveId));
      },
    });
  }

  function handleEdit(id: string) {
    history.push(`/editar/${id}`);
  }

  function openModal(id: string) {
    api.get(`navers/${id}`).then(res =>
      addModalData({
        data: res.data,
        deleteSuccess: naveid => {
          setNavers(navers.filter(naver => naver.id !== naveid));
        },
      }),
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <div className="titulo-page">
          <h1>Navers</h1>
          <Link to="/adicionar">Adicionar Naver</Link>
        </div>
        <div className="grid-4_xs-1 grid-equalHeight">
          {navers.map(naver => (
            <div className="col" key={naver.id}>
              <div className="card">
                <div
                  onClick={() => openModal(naver.id)}
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  className="area-clicavel"
                >
                  <img src={naver.url} alt="logo" className="img-max" />
                  <h5>{naver.name}</h5>
                  <p>{naver.job_role}</p>
                </div>
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => handleDelete(naver.id)}
                >
                  <FaTrash />
                </button>
                <button
                  type="button"
                  className="btn-icon"
                  onClick={() => handleEdit(naver.id)}
                >
                  <FaPen />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  );
};
export default Home;
