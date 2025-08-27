import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

export const USER_SERVICE = Symbol('USER_SERVICE');

export interface IUserService {
  findAll(): Promise<UserResponseDto[]>;
  findOne(id: string): Promise<UserResponseDto>;
  create(dto: CreateUserDto): Promise<UserResponseDto>;
  update(id: string, dto: UpdateUserDto): Promise<UserResponseDto>;
  remove(id: string): Promise<void>;
}
