import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { EditUserDto } from '../dtos/edit-user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: CreateUserDto) {
    return this.userService.create(user);
  }

  @Put('/:id')
  edit(@Param('id') id: number, @Body() user: EditUserDto) {
    return this.userService.edit(id, user);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    this.userService.delete(id);
  }
}
