import React from 'react';
import { CheckCircle2, Heart, Sparkles, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'like' | 'reaction' | 'info';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-start gap-3 p-4 bg-neutral-900/95 backdrop-blur-md text-white rounded-2xl shadow-xl border border-white/10 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="mt-0.5 shrink-0">
            {toast.type === 'like' && <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />}
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
            {toast.type === 'reaction' && <Sparkles className="w-5 h-5 text-amber-400" />}
            {toast.type === 'info' && <Sparkles className="w-5 h-5 text-indigo-400" />}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold leading-snug">{toast.title}</h4>
            {toast.description && (
              <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => onDismiss(toast.id)}
            className="text-neutral-400 hover:text-white p-1 -mr-1 rounded-lg transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
