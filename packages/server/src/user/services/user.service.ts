import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { CreateUserDto } from '../dtos/create-user.dto';
import { EditUserDto } from '../dtos/edit-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(user: CreateUserDto): Promise<any> {
    const obj = this.repository.create(user);
    return this.repository.save(obj);
  }

  async edit(id: number, user: EditUserDto): Promise<any> {
    const obj = await this.repository.findOne(id);
    obj.firstName = user.firstName;
    obj.lastName = user.lastName;
    return this.repository.save(obj);
  }

  async delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }

  async verifyCredenciaisToDelete(credenciais: User): Promise<any> {
    const user = await this.repository.findOne({
      select: ['id', 'password'],
      where: { email: credenciais.email },
    });
    if (user && (await compare(credenciais.password, user.password))) {
      return user;
    }
    return false;
  }
}
