import { create, StateCreator } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';

interface User {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

interface IInitialState {
  user: null | User;
  isLoading: boolean;
  error: null | string;
}

interface IActions {
  setUser: (user: null | User) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: null | string) => void;
  logout: () => void;
}

const initialState: IInitialState = {
  user: null,
  isLoading: false,
  error: null,
};

interface IAuthState extends IInitialState, IActions {}

const authStore: StateCreator<IAuthState, [['zustand/devtools', never], ['zustand/persist', unknown]]> = (set) => ({
  ...initialState,

  setUser: (user) => set({ user }, false, 'setUser'),
  setLoading: (isLoading) => set({ isLoading }, false, 'authIsLoading'),
  setError: (error) => set({ error }, false, 'authError'),

  logout: () => {
    set({ user: null, error: null }, false, 'logout');
  },
});

export const useAuthStore = create<IAuthState>()(
  devtools(
    persist(authStore, {
      name: 'userAuth',
      partialize: (state) => ({ user: state.user }),
      storage: createJSONStorage(() => localStorage),
    })
  )
);
