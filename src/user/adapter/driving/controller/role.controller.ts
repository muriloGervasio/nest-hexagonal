import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { CreateRoleUseCase } from 'src/user/application/driving/create-role.use-case';
import { CreateRoleRequest } from '../request/role.request';

@Controller('roles')
export class RoleController {
  constructor(private readonly createRoleUseCase: CreateRoleUseCase) {}

  @Post()
  async createRole(@Body() body: CreateRoleRequest) {
    return this.createRoleUseCase.execute(body.toCommand());
  }
}
