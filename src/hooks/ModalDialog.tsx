import React, { createContext, useContext, useState, useCallback } from 'react';
import Modal from '../components/Modal/Modal-Dialog';
import api from '../services/api';
import { useModalAlert } from './ModalAlert';

interface ModalMessage {
  id: string;
  title: string;
  message: string;
  onSuccess(id: string): void;
  visible: boolean;
}

interface ModalContextData {
  messageModal: ModalMessage;
  addModalDialog(message: Omit<ModalMessage, 'visible'>): void;
  closeModal(): void;
  deleteNave(id: string): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalDialogProvider: React.FC = ({ children }) => {
  const [messageModal, setMessageModal] = useState<ModalMessage>(
    {} as ModalMessage,
  );

  const { addModalAlert } = useModalAlert();

  const addModalDialog = useCallback(
    ({ title, message, onSuccess, id }: Omit<ModalMessage, 'visible'>) => {
      const modal = {
        id,
        title,
        message,
        onSuccess,
        visible: true,
      };

      setMessageModal(modal);
    },
    [],
  );

  const closeModal = useCallback(() => {
    const modal = {
      id: '',
      title: '',
      message: '',
      onSuccess: () => { }, // eslint-disable-line
      visible: false,
    };
    setMessageModal(modal);
  }, []);

  const deleteNave = useCallback(
    (id: string) => {
      api.delete(`navers/${id}`).then(res => {
        messageModal.onSuccess(id);
        closeModal();
        addModalAlert({
          title: 'Naver excluído',
          message: 'Naver excluído com sucesso!',
        });
      });
    },
    [addModalAlert, closeModal, messageModal],
  );

  return (
    <ModalContext.Provider
      value={{ messageModal, addModalDialog, closeModal, deleteNave }}
    >
      {children}
      <Modal visible={messageModal.visible} />
    </ModalContext.Provider>
  );
};

function useModalDialog(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Essa função deve ser usada em um provider');
  }

  return context;
}

export { ModalDialogProvider, useModalDialog };
