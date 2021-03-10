import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Container, Content, Modal } from './styles';
import { useModalAlert } from '../../../hooks/ModalAlert';

interface Props {
  visible: boolean;
}

const ModalAlert: React.FC<Props> = ({ visible }: Props) => {
  const { closeModal, messageModal } = useModalAlert();

  return (
    <>
      {visible && (
        <Container>
          <Content>
            <Modal>
              <div className="btn-close-modal">
                <button
                  type="button"
                  onClick={() => {
                    closeModal();
                  }}
                >
                  <FaTimes size={18} color="#000" />
                </button>
              </div>

              <div className="conteudo-visualizacao">
                <h3>{messageModal.title}</h3>
                <p>{messageModal.message}</p>
              </div>
            </Modal>
          </Content>
        </Container>
      )}
    </>
  );
};

export default ModalAlert;
