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
    uploadedImages: [],
    scheduledPickup: {
      date: "",
      time: "",
    },
    advancedOptions: {
      methodOfContact: "",
      shelterPref: "",
    },
  },
  setDetails: (newDetails) =>
    set((state) => ({
      details: { ...state.details, ...newDetails },
    })),
}));
