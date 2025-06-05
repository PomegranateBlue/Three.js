import create from 'zustand';

interface UserState {
  id: string;
}

export const useUserStore = create<UserState>(() => ({
  id: Math.random().toString(36).slice(2, 9),
}));
