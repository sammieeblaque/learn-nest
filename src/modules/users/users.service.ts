import { Injectable } from '@nestjs/common';
import { Role, users } from 'src/constants/users.constants';

@Injectable()
export class UsersService {
  private users = users;

  findAll(role?: Role) {
    if (role) {
      return this.users.filter((user) => user.role === role?.toLowerCase());
    }
    return this.users;
  }

  findOne(id: string) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: Role }) {
    const newUser = {
      id: 'UTD28MZQ7Rk',
      ...user,
    };

    return this.users.push(newUser);
  }

  update(
    id: string,
    userUpdate: { name?: string; email?: string; role?: Role },
  ) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...userUpdate };
      }
      return user;
    });
    return this.findOne(id);
  }

  deleteOne(id: string) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
