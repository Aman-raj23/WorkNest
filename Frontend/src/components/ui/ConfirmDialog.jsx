import { AlertTriangle } from 'lucide-react';
import Button from '../common/Button';
import Modal from '../common/Modal';

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = 'Confirm Action',
  message = 'Are you sure you want to proceed? This action cannot be undone.',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'danger',
  loading = false,
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-sm" showCloseButton={false}>
      <div className="text-center space-y-4">
        <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mx-auto">
          <AlertTriangle size={24} className="text-rose-600" />
        </div>
        <div>
          <h3 className="text-base font-bold text-slate-900">{title}</h3>
          <p className="text-xs text-slate-500 mt-1">{message}</p>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <Button variant="secondary" onClick={onClose} fullWidth disabled={loading}>
            {cancelText}
          </Button>
          <Button variant={variant} onClick={onConfirm} fullWidth loading={loading}>
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
