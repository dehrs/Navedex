import React, { createContext, useContext, useState, useCallback } from 'react';
import Modal from '../components/Modal/Modal-Data';

interface ModalMessage {
  data: {
    id: string;
    name: string;
    birthdate: string;
    admission_date: string;
    job_role: string;
    project: string;
    url: string;
  };
  deleteSuccess(id: string): void;
  visible: boolean;
}

interface ModalContextData {
  messageModal: ModalMessage;
  addModalData(message: Omit<ModalMessage, 'visible'>): void;
  closeModal(): void;
}

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalDataProvider: React.FC = ({ children }) => {
  const [messageModal, setMessageModal] = useState<ModalMessage>(
    {} as ModalMessage,
  );

  const addModalData = useCallback(
    ({ data, deleteSuccess }: Omit<ModalMessage, 'visible'>) => {
      const modal = {
        data,
        deleteSuccess,
        visible: true,
      };

      setMessageModal(modal);
    },
    [],
  );

  const closeModal = useCallback(() => {
    const modal = {
      data: {
        id: '',
        name: '',
        birthdate: '',
        admission_date: '',
        job_role: '',
        project: '',
        url: '',
      },
      deleteSuccess: () => { },  // eslint-disable-line
      visible: false,
    };
    setMessageModal(modal);
  }, []);

  return (
    <ModalContext.Provider value={{ messageModal, addModalData, closeModal }}>
      {children}
      <Modal visible={messageModal.visible} />
    </ModalContext.Provider>
  );
};

function useModalData(): ModalContextData {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('Essa função deve ser usada em um provider');
  }

  return context;
}

export { ModalDataProvider, useModalData };
