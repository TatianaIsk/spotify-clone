'use client';

import AuthModal from '@/components/ui/Modal/AuthModal';
import UploadModal from '@/components/ui/Modal/UploadModal';

import { useEffect, useState } from 'react';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isMounted && <AuthModal />}
      {isMounted && <UploadModal />}
    </>
  );
};

export default ModalProvider;
