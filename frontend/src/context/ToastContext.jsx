"use client";

import { createContext, useContext } from "react";
import { toast } from "react-toastify";

const ToastContext = createContext();

export function ToastProvider({ children }) {

  const showSuccess = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 2500,
      closeButton: false,
      icon: false,
      style: {
        background: "#ecfdf5",
        color: "#065f46",
      },
      progressStyle: {
        background: "#609647", // green
      },
    });
  };

  const showFail = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 2500,
      closeButton: false,
      icon: false,
      style: {
        background: "#fef2f2",
        color: "#7f1d1d",
      },
      progressStyle: {
        background: "#ed7878", // red
      },
    });
  };

  return (
    <ToastContext.Provider value={{ showSuccess, showFail }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}