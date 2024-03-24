import { IsString, IsEmail, IsEnum, IsNotEmpty } from 'class-validator';
import { Role, UsersType } from 'src/constants/users.constants';

export class CreateUserDto implements UsersType {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  phone: string;
  id: string;

  @IsEnum(['Intern', 'Admin', 'Buyer'], {
    message: 'Valid role required',
  })
  role: Role;
}
