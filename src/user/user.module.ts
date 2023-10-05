import { Module } from '@nestjs/common/decorators';
import { RoleController } from './adapter/driving/controller/role.controller';
import { RoleRepository } from './application/driven/role.repository';
import { RoleRepositoryPrismaAdapter } from './adapter/driven/role-repository-prisma.adapter';
import { CreateRoleUseCase } from './application/driving/create-role.use-case';
import { CreateRoleService } from './application/service/create-role.service';
import { UserHasAccessUseCase } from './application/driving/user-has-access.use-case';
import { UserHasAccessService } from './application/service/user-has-access.service';
import { UserEvent } from './adapter/driving/event/user-event';

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
    {
      provide: UserHasAccessUseCase,
      useValue: UserHasAccessService,
    },
    UserEvent,
  ],
  controllers: [RoleController],
})
export class UserModule {}
