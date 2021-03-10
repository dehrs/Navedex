import React from 'react';
import { FaTimes, FaTrash, FaPen } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useModalData } from '../../../hooks/ModalData';
import { useModalDialog } from '../../../hooks/ModalDialog';
import formatDate from '../../../utils/formatDate';

import { Container, Content, Modal } from './styles';

interface Props {
  visible: boolean;
}

const ModalVisualizacao: React.FC<Props> = ({ visible }: Props) => {
  const { closeModal, messageModal } = useModalData();
  const { addModalDialog } = useModalDialog();
  const history = useHistory();

  function handleEdit() {
    history.push(`/editar/${messageModal.data.id}`);
    closeModal();
  }

  function handleRemove() {
    addModalDialog({
      title: 'Excluir Naver',
      message: 'Tem certeza que deseja excluir este Naver?',
      id: messageModal.data.id,
      onSuccess: naveId => {
        messageModal.deleteSuccess(naveId);
        closeModal();
      },
    });
  }

  return (
    <>
      {visible && (
        <Container>
          <Content>
            <Modal>
              <div className="coluna-img">
                <img src={messageModal.data.url} alt={messageModal.data.name} />
              </div>

              <div className="conteudo-visualizacao">
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      closeModal();
                    }}
                  >
                    <FaTimes size={18} color="#000" />
                  </button>
                </div>
                <h3>{messageModal.data.name}</h3>
                <p>{messageModal.data.job_role}</p>
                <strong>Idade</strong>
                <p>{formatDate(messageModal.data.birthdate)}</p>
                <strong>Tempo de empresa</strong>
                <p>{formatDate(messageModal.data.admission_date)}</p>
                <strong>Projetos que participou</strong>
                <p>{messageModal.data.project}</p>

                <div className="footer-visualizacao">
                  <button type="button" className="btn-icon">
                    <FaTrash
                      onClick={() => {
                        handleRemove();
                      }}
                    />
                  </button>
                  <button
                    type="button"
                    className="btn-icon"
                    onClick={() => handleEdit()}
                  >
                    <FaPen />
                  </button>
                </div>
              </div>
            </Modal>
          </Content>
        </Container>
      )}
    </>
  );
};

export default ModalVisualizacao;
