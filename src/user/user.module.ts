import { Module } from '@nestjs/common/decorators';
import { RoleController } from './adapter/driving/controller/role.controller';
import { RoleRepository } from './application/driven/role.repository';
import { RoleRepositoryPrismaAdapter } from './adapter/driven/role-repository-prisma.adapter';
import { CreateRoleUseCase } from './application/driving/create-role.use-case';
import { CreateRoleService } from './application/service/create-role.service';

@Module({
  providers: [
    {
      provide: RoleRepository,
      useClass: RoleRepositoryPrismaAdapter,
    },
    {
      provide: CreateRoleUseCase,
      useClass: CreateRoleService,
    },
  ],
  controllers: [RoleController],
})
export class UserModule {}
