import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    username: string;
    email: string;
    password: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      email: 'john@mail.fr',
      password: 'changeme',
    },
    {
      id: 2,
      username: 'maria',
      email: 'maria@mail.fr',
      password: 'guess',
    },
  ];

  async find(id: number): Promise<User | undefined> {
    return this.users.find(user => user.id === id);
  }
  
  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find(user => user.email === email);
  }
}