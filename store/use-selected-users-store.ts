import { create, StateCreator } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface IUsersByDoctor {
  [id: number]: number[];
}

interface IInitialState {
  usersByDoctor: IUsersByDoctor;
}

interface IActions {
  addUser: (doctorId: number, userId: number) => void;
  removeUser: (doctorId: number, userId: number) => void;
  isSelected: (doctorId: number, userId: number) => boolean;
}

const initialState: IInitialState = {
  usersByDoctor: {},
};

interface ISelectedUsersState extends IInitialState, IActions {}

const selectedUsersStore: StateCreator<ISelectedUsersState, [['zustand/immer', never], ['zustand/devtools', never], ['zustand/persist', unknown]]> = (
  set,
  get
) => ({
  ...initialState,

  addUser: (doctorId: number, userId: number) =>
    set(
      (state) => {
        const currentDoctorUsers = Array.isArray(state.usersByDoctor[doctorId]) ? state.usersByDoctor[doctorId] : [];

        const isUserExisted = currentDoctorUsers.includes(userId);
        if (isUserExisted) return state;

        return {
          usersByDoctor: {
            ...state.usersByDoctor,
            [doctorId]: [...currentDoctorUsers, userId],
          },
        };
      },
      false,
      'addUser'
    ),

  removeUser: (doctorId: number, userId: number) =>
    set(
      (state) => {
        const currentDoctorUsers = Array.isArray(state.usersByDoctor[doctorId]) ? state.usersByDoctor[doctorId] : [];

        return {
          usersByDoctor: {
            ...state.usersByDoctor,
            [doctorId]: currentDoctorUsers.filter((id: number) => id !== userId),
          },
        };
      },
      false,
      'removeUser'
    ),

  isSelected: (doctorId: number, userId: number) => {
    const currentDoctorUsers = get().usersByDoctor[doctorId] || [];
    return Array.isArray(currentDoctorUsers) && currentDoctorUsers.includes(userId);
  },
});

export const useSelectedUsersStore = create<ISelectedUsersState>()(
  immer(
    devtools(
      persist(selectedUsersStore, {
        name: 'selected-users',
        partialize: (state) => ({ usersByDoctor: state.usersByDoctor }),
        storage: createJSONStorage(() => localStorage),
        skipHydration: true,
      })
    )
  )
);
