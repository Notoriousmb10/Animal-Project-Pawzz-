import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSidebarState: (state) => set({ isOpen: state }),
}));

export const useDetailsStore = create((set) => ({
  details: {
    reportDetails: {
      description: "",
      animal: "",
      severity: "",
      location: "",
      contact: null,
    },
    scheduledPickup: {
      date: "",
      time: "",
    },
    advanceOptions: {
      methodOfContact: "",
      shelterPref: "",
    },
  },
  setDetails: (newDetails) =>
    set((state) => ({
      details: { ...state.details, ...newDetails },
    })),
}));

export const useProgressStore = create((set) => ({
  progress: 25,
  setProgress: (value) => set({ progress: value }),
}));
