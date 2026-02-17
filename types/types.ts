export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  phone: string;
}

interface AddressFields {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  country: string;
}

export interface DetailedUserResponse extends UserResponse {
  maidenName: string;
  email: string;
  address: AddressFields;

  username: string;
  password: string;
  ip: string;

  bloodGroup: string;
  height: number;
  weight: number;

  university: string;

  company: {
    department: string;
    title: string;
    name: string;
    address: AddressFields;
  };

  bank: {
    cardNumber: string;
    cardType: string;
    cardExpire: string;
    currency: string;
    iban: string;
  };

  crypto: {
    coin: string;
    network: string;
  };
}
