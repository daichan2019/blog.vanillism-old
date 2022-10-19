import { atom, useRecoilValue } from 'recoil';

type UserState = {
  id: number;
  displayName: string;
  email: string;
  uid: string;
  customerId: string;
  subscriptionId: string;
  activeUntil: Date;
};

const userState = atom<UserState | null>({
  key: 'userState',
  default: null,
});

export const useUserState = () => {
  return useRecoilValue(userState);
};
