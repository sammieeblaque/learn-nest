import { Role, UsersType } from 'src/constants/users.constants';

export class CreateUserDto implements UsersType {
  name: string;
  email: string;
  phone: string;
  id: string;
  role: Role;
}
