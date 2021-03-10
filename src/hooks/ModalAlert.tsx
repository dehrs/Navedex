import React, { createContext, useContext, useState, useCallback } from 'react';
import Modal from '../components/Modal/Modal-Alert';

interface ModalMessage {
  title: string;
  message: string;
  visible: boolean;
}

interface ModalContextData {
  messageModal: ModalMessage;
  addModalAlert(message: Omit<ModalMessage, 'visible'>): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalAlertProvider: React.FC = ({ children }) => {
  const [messageModal, setMessageModal] = useState<ModalMessage>(
    {} as ModalMessage,
  );

  const addModalAlert = useCallback(
    ({ title, message }: Omit<ModalMessage, 'visible'>) => {
      const modal = {
        title,
        message,
        visible: true,
      };

      setMessageModal(modal);
    },
    [],
  );

  const closeModal = useCallback(() => {
    const modal = {
      title: '',
      message: '',
      visible: false,
    };
    setMessageModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={{ messageModal, addModalAlert, closeModal }}>
      {children}
      <Modal visible={messageModal.visible} />
    </ModalContext.Provider>
  );
};

function useModalAlert(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Essa função deve ser usada em um provider');
  }

  return context;
}

export { ModalAlertProvider, useModalAlert };
