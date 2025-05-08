import { useState, useEffect } from 'react';

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts([...toasts, toast]);
  };

  useEffect(() => {
    if (toasts.length > 0) {
      const timer = setTimeout(() => {
        setToasts(toasts.slice(1));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toasts]);

  return {
    toasts,
    addToast,
  };
}

export function useToastNotification(addToast, { title, description }) {
  addToast({ title, description });
}