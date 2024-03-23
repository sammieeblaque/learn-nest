import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Role, UsersType } from 'src/constants/users.constants';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: Role) {
    if (role?.toLowerCase() === 'admin') {
      return this.usersService.findAll(role);
    } else {
      return this.usersService.findAll();
    }
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }
  @Post()
  create(@Body() user: UsersType) {
    return this.usersService.create(user);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: UsersType) {
    return this.usersService.update(id, userUpdate);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    this.usersService.deleteOne(id);
  }
}
