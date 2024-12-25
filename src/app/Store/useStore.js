import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useSidebarStore = create(persist((set) => ({
  isOpen: false,
  toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
  setSidebarState: (state) => set({ isOpen: state }),
}), {
  name: "sidebar",
  getStorage: () => sessionStorage,
}));


export const useDetailsStore = create(persist((set) => ({
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
}), {
  name: "details",
  getStorage: () => sessionStorage,
}));

export const useProgressStore = create(persist((set) => ({
  progress:0,
  setProgress: (value) => set({ progress: value }),
}), {
  name: "progress",
  getStorage: () => sessionStorage,
}));
