import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Email } from '../../../models/EmailModel';

interface EmailModalProps {
    emailModal :Email
    handleEmailRead: (email: Email) => void;
}

const EmailModal = ({emailModal, handleEmailRead}:EmailModalProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button style={{marginLeft:'12px'}} onClick={showModal}>
        Ver
      </Button>
      <Modal title={emailModal.name} open={isModalOpen} onOk={()=>{handleOk(); handleEmailRead(emailModal)}} onCancel={handleCancel}>
        <p>{emailModal.description}</p>
      </Modal>
    </>
  );
};

export default EmailModal;