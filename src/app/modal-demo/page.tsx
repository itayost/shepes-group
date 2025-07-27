'use client';

import ContactForm from '@/components/common/ContactForm';
import Button from '@/components/ui/Button';
import Modal, { ConfirmModal } from '@/components/ui/Modal';
import { useState } from 'react';

export default function ModalDemoPage() {
  const [basicModal, setBasicModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [customModal, setCustomModal] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDeleting(false);
    setConfirmModal(false);
    alert('נמחק בהצלחה!');
  };

  return (
    <div className="section">
      <div className="container">
        <h1 className="mb-8 text-3xl font-bold">Modal Component Demo</h1>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Basic Modal */}
          <Button onClick={() => setBasicModal(true)}>
            Basic Modal
          </Button>

          {/* Confirm Modal */}
          <Button onClick={() => setConfirmModal(true)} variant="secondary">
            Confirm Modal
          </Button>

          {/* Form Modal */}
          <Button onClick={() => setFormModal(true)} variant="outline">
            Form Modal
          </Button>

          {/* Custom Modal */}
          <Button onClick={() => setCustomModal(true)} variant="ghost">
            Custom Modal
          </Button>
        </div>

        {/* Basic Modal */}
        <Modal
          isOpen={basicModal}
          onClose={() => setBasicModal(false)}
          title="Basic Modal"
          description="This is a simple modal with title and description"
        >
          <p className="text-gray-600">
            This is the modal content. You can put any content here including forms, 
            images, or any other React components.
          </p>
        </Modal>

        {/* Confirm Modal */}
        <ConfirmModal
          isOpen={confirmModal}
          onClose={() => setConfirmModal(false)}
          onConfirm={handleDelete}
          title="מחיקת פריט"
          message="האם אתה בטוח שברצונך למחוק את הפריט? פעולה זו אינה ניתנת לביטול."
          confirmText="מחק"
          cancelText="ביטול"
          confirmVariant="secondary"
          isLoading={isDeleting}
        />

        {/* Form Modal */}
        <Modal
          isOpen={formModal}
          onClose={() => setFormModal(false)}
          title="Contact Us"
          size="xl"
          closeOnClickOutside={false}
        >
          <ContactForm />
        </Modal>

        {/* Custom Modal */}
        <Modal
          isOpen={customModal}
          onClose={() => setCustomModal(false)}
          size="lg"
          showCloseButton={false}
          footer={
            <div className="flex gap-3 justify-between">
              <Button variant="ghost" onClick={() => setCustomModal(false)}>
                Skip
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setCustomModal(false)}>
                  Cancel
                </Button>
                <Button onClick={() => setCustomModal(false)}>
                  Continue
                </Button>
              </div>
            </div>
          }
        >
          <div className="text-center py-8">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Welcome!</h3>
            <p className="text-gray-600">
              This is a custom modal without header, with custom footer layout.
            </p>
          </div>
        </Modal>
      </div>
    </div>
  );
}