import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/infrastructure/prisma.service';
import { RoleRepository } from 'src/user/application/driven/role.repository';
import { Role } from 'src/user/domain/role';

@Injectable()
export class RoleRepositoryPrismaAdapter implements RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(role: Role): Promise<void> {
    await this.prisma.roleEntity.create({
      data: {
        description: role.name,
        acess: {
          create: role.access.map((access) => {
            return {
              name: access.name,
              create: access.create,
              read: access.read,
              update: access.update,
              remove: access.remove,
            };
          }),
        },
      },
    });
  }
}
