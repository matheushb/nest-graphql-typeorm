import { User } from 'src/graphql/adress/models/user.model';

export const users: User[] = [
  {
    email: 'matheushbaraldi@gmail.com',
    id: 1,
    isActive: true,
  },
  { email: 'josericardo@gmail.com', id: 2, isActive: true },
  {
    email: 'joseraphael@gmail.com',
    username: 'zezao_da_infra',
    id: 3,
    isActive: false,
  },
  { email: 'matheusalisauska@gmail.com', id: 4, isActive: true },
  { email: 'renanleonel@gmail.com', id: 5, isActive: true },
];
