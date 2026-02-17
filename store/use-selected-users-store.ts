import { create, StateCreator } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IInitialState {
  selectedUsers: number[];
}

interface IActions {
  addUser: (userId: number) => void;
  removeUser: (userId: number) => void;
  isSelected: (userId: number) => boolean;
}

const initialState: IInitialState = {
  selectedUsers: [],
};

interface ISelectedUsersState extends IInitialState, IActions {}

const selectedUsersStore: StateCreator<ISelectedUsersState, [['zustand/immer', never], ['zustand/devtools', never], ['zustand/persist', unknown]]> = (
  set,
  get
) => ({
  ...initialState,

  addUser: (userId) =>
    set(
      (state) => {
        const exists = state.selectedUsers.some((id) => id === userId);
        if (exists) return state;

        return {
          selectedUsers: [...state.selectedUsers, userId],
        };
      },
      false,
      'addUser'
    ),

  removeUser: (userId: number) => set((state) => ({ selectedUsers: state.selectedUsers.filter((id: number) => id !== userId) }), false, 'removeUser'),

  isSelected: (userId: number) => {
    return get().selectedUsers.some((id) => id === userId);
  },
});

export const useSelectedUsersStore = create<ISelectedUsersState>()(
  immer(
    devtools(
      persist(selectedUsersStore, {
        name: 'selected-users',
        partialize: (state) => ({ selectedUsers: state.selectedUsers }),
        storage: createJSONStorage(() => localStorage),
        skipHydration: true,
      })
    )
  )
);
