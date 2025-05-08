import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create((set) => ({
  userId: null,
  setUser: (userId) => {
    localStorage.setItem("userId", userId);
    set({ userId });
  },
  loadUser: () => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      set({ userId });
    }
  },
}));

export const useSidebarStore = create(
  persist(
    (set) => ({
      isOpen: false,
      toggleSidebar: () => set((state) => ({ isOpen: !state.isOpen })),
      setSidebarState: (state) => set({ isOpen: state }),
    }),
    {
      name: "sidebar",
      getStorage: () => sessionStorage,
    },
  ),
);

export const useDetailsStore = create(
  persist(
    (set) => ({
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
    }),
    {
      name: "details",
      getStorage: () => sessionStorage,
    },
  ),
);

export const useImagesStore = create(
  persist(
    (set, get) => ({
      routeImages: {},
      setImages: (route, images) =>
        set((state) => ({
          routeImages: { ...state.routeImages, [route]: images },
        })),
      getImages: (route) => get().routeImages[route] || [],
    }),
    {
      name: "route-images",
      getStorage: () => sessionStorage,
    },
  ),
);

export const useProgressStore = create(
  persist(
    (set) => ({
      progress: 0,
      setProgress: (value) => set({ progress: value }),
    }),
    {
      name: "progress",
      getStorage: () => sessionStorage,
    },
  ),
);

export const useScheduleCountStore = create(
  persist(
    (set) => ({
      scheduleCount: 0,
      setScheduleCount: (value) => set({ scheduleCount: value }),
    }),
    {
      name: "scheduleCount",
      getStorage: () => sessionStorage,
    },
  ),
);

export const useAdoptionStore = create(
  persist(
    (set) => ({
      adoptionDetails: {
        type: "",
        gender: "",
        name: "",
        tags: [],
        location: "",
        age: "",
        healthStatus: "",
        description: "",
        urgency: "",
      },
      setAdoptionDetails: (newDetails) =>
        set((state) => ({
          adoptionDetails: { ...state.adoptionDetails, ...newDetails },
        })),
    }),
    {
      name: "adoption-details",
      getStorage: () => sessionStorage,
    },
  ),
);
