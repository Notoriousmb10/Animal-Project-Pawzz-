import { useState, useEffect } from "react";

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, toast]);
  };

  useEffect(() => {
    if (toasts.length === 0) return;

    const timer = setTimeout(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);

    return () => clearTimeout(timer);
  }, [toasts.length]);

  return { toasts, addToast };
}

export function useToastNotification(addToast, { title, description }) {
  useEffect(() => {
    addToast({ title, description });
  }, [addToast, title, description]);
}
