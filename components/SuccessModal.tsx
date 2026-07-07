'use client';

import { useEffect } from 'react';

type SuccessModalProps = {
  isOpen: boolean;
  onClose: () => void;
  machineTitle?: string;
};

export default function SuccessModal({ isOpen, onClose, machineTitle }: SuccessModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Модалка */}
      <div
        className="relative w-full max-w-md bg-[#1a1a1a] border-2 border-accent shadow-2xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Кнопка закрыть */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center text-steel hover:text-[#f5f5f0] transition-colors"
          aria-label="Close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {/* Содержимое */}
        <div className="px-8 pt-10 pb-8">
          {/* Иконка с пульсацией */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent opacity-40 blur-xl animate-pulseGlow" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-accent">
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-checkIn"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>
          </div>

          {/* Заголовок */}
          <h2 className="text-center font-oswald text-3xl font-bold uppercase tracking-wider text-[#f5f5f0] mb-3">
            Inquiry Sent!
          </h2>

          {/* Сообщение */}
          <p className="text-center font-inter text-base text-[#f5f5f0]/90 mb-2">
            Thank you for your interest
          </p>

          {machineTitle && (
            <p className="text-center font-oswald text-lg uppercase tracking-wide text-accent mb-4">
              {machineTitle}
            </p>
          )}

          <p className="text-center font-inter text-sm text-steel mb-6">
            Our team will contact you within{' '}
            <span className="font-semibold text-[#f5f5f0]">1 business day</span>
          </p>

          {/* Разделитель */}
          <div className="border-t border-[#2a2a2a] my-6" />

          {/* Контакт */}
          <div className="text-center mb-6">
            <p className="font-inter text-xs uppercase tracking-wider text-steel mb-2">
              Need immediate assistance?
            </p>
            <a
              href="tel:+14052938154"
              className="font-oswald text-2xl font-bold tracking-wide text-accent hover:text-[#f5f5f0] transition-colors"
            >
              (405) 293-8154
            </a>
          </div>

          {/* Кнопка закрыть */}
          <button
            onClick={onClose}
            className="w-full bg-accent py-3 font-oswald text-lg uppercase tracking-wider text-white transition-colors hover:bg-amber-600"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}