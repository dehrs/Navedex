import React from 'react';
import { Container, Content, Modal } from './styles';
import { useModalDialog } from '../../../hooks/ModalDialog';

interface Props {
  visible: boolean;
}

const ModalAlert: React.FC<Props> = ({ visible }: Props) => {
  const { closeModal, messageModal, deleteNave } = useModalDialog();

  function handleCancel() {
    closeModal();
  }

  function handleConfirmDelete() {
    deleteNave(messageModal?.id);
  }

  return (
    <>
      {visible && (
        <Container>
          <Content>
            <Modal>
              <div className="conteudo-visualizacao">
                <h3>{messageModal.title}</h3>
                <p>{messageModal.message}</p>

                <div>
                  <button
                    type="button"
                    className="btn-light"
                    onClick={() => handleConfirmDelete()}
                  >
                    Excluir
                  </button>
                  <button
                    type="button"
                    className="btn-dark"
                    onClick={() => handleCancel()}
                  >
                    Cancelar
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

export default ModalAlert;
