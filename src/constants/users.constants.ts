export const users: UsersType[] = [
  {
    email: 'luctus.felis.purus@icloud.couk',
    id: 'OSL50RCU4DM',
    phone: '0800 1111',
    name: 'Brenden Phelps',
    role: 'Admin',
  },
  {
    email: 'sed.neque.sed@protonmail.com',
    id: 'UTD28MZQ7RV',
    phone: '0800 1111',
    name: 'Lysandra Estrada',
    role: 'Admin',
  },
  {
    email: 'turpis.in@aol.com',
    id: 'TIR22JWT9LS',
    phone: '0800 1111',
    name: 'Chanda Powers',
    role: 'Intern',
  },
  {
    email: 'lacus.ut@hotmail.org',
    id: 'MDT13QQL3TP',
    phone: '0800 1111',
    name: 'Valentine Cook',
    role: 'Buyer',
  },
  {
    email: 'eu.enim.etiam@hotmail.ca',
    id: 'SUU27IWA0BH',
    phone: '0800 1111',
    name: 'Elvis Todd',
    role: 'Intern',
  },
];

export type Role = 'Intern' | 'Admin' | 'Buyer';

export interface UsersType {
  email: string;
  id: string;
  phone: string;
  name: string;
  role: Role;
}
