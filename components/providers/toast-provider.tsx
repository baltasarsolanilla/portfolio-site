import { toast } from 'sonner';
import { Toaster } from '../ui/sonner';

export const ToastProvider = () => {
  return <Toaster position="top-right" richColors />;
};

export const successToast = (message: string) => {
  toast.success(message);
};

export const errorToast = (message: string) => {
  toast.error(message);
};
