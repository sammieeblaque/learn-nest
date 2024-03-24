import { Injectable, NotFoundException } from '@nestjs/common';
import { Role, users } from 'src/constants/users.constants';
import { faker } from '@faker-js/faker';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = users;

  findAll(role?: Role) {
    if (role) {
      const rolesArray = this.users.filter(
        (user) => user.role?.toLowerCase() === role?.toLowerCase(),
      );
      if (rolesArray.length === 0) {
        throw new NotFoundException('User Roles not Found');
      }
    }
    return this.users;
  }

  findOne(id: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: faker.string.alphanumeric(11).toUpperCase(),
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updateUserDto };
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
