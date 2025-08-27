import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { IUserService } from './users.service.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserResponseDto } from './dto/user-response.dto';

@Injectable()
export class UsersService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  private toResponseDto(entity: User): UserResponseDto {
    return {
      id: entity.id,
      name: entity.name,
      email: entity.email,
      active: entity.active,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  async findAll(): Promise<UserResponseDto[]> {
    const list = await this.repo.find();
    return list.map((u) => this.toResponseDto(u));
  }

  async findOne(id: string): Promise<UserResponseDto> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException('User not found');
    return this.toResponseDto(entity);
  }

  async create(dto: CreateUserDto): Promise<UserResponseDto> {
    const exists = await this.repo.findOne({ where: { email: dto.email } });
    if (exists) throw new ConflictException('Email already exists');

    const entity = this.repo.create(dto); // mapea dto → entity
    const saved = await this.repo.save(entity);
    return this.toResponseDto(saved);
  }

  async update(id: string, dto: UpdateUserDto): Promise<UserResponseDto> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException('User not found');

    Object.assign(entity, dto);
    const saved = await this.repo.save(entity);
    return this.toResponseDto(saved);
  }

  async remove(id: string): Promise<void> {
    const entity = await this.repo.findOne({ where: { id } });
    if (!entity) throw new NotFoundException('User not found');
    await this.repo.delete(id);
  }
}
