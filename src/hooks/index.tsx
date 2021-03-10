import React from 'react';

import { AuthProvider } from './Auth';
import { ModalAlertProvider } from './ModalAlert';
import { ModalDataProvider } from './ModalData';
import { ModalDialogProvider } from './ModalDialog';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ModalAlertProvider>
      <ModalDialogProvider>
        <ModalDataProvider>{children}</ModalDataProvider>
      </ModalDialogProvider>
    </ModalAlertProvider>
  </AuthProvider>
);

export default AppProvider;
