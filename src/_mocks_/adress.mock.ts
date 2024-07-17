import { Adress } from 'src/graphql/adress/models/user-adress.model';

export const addresses: Adress[] = [
  {
    city: 'Maringá',
    country: 'Brazil',
    number: 2000,
    state: 'Paraná',
    streetName: 'Cerro Azul',
    userId: 1,
    zipcode: '8700000',
  },
  {
    city: 'São Paulo',
    country: 'Brazil',
    number: 1234,
    state: 'São Paulo',
    streetName: 'Avenida Paulista',
    userId: 2,
    zipcode: '01311000',
  },
  {
    city: 'Rio de Janeiro',
    country: 'Brazil',
    number: 5678,
    state: 'Rio de Janeiro',
    streetName: 'Rua do Ouvidor',
    userId: 3,
    zipcode: '20040030',
  },
];
