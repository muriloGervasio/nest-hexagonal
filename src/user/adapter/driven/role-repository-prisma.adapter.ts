import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/db/prisma.service';
import { RoleRepository } from 'src/user/application/driven/role.repository';
import { Role } from 'src/user/domain/role';
import { RoleMapper } from './role.mapper';

@Injectable()
export class RoleRepositoryPrismaAdapter implements RoleRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(role: Role): Promise<void> {
    await this.prisma.roleEntity.create({
      data: {
        description: role.name,
        access: {
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

  async findByNameAndUserId(userId: number): Promise<Role> {
    const role = await this.prisma.roleEntity.findFirst({
      where: {
        User: {
          some: {
            id: userId,
          },
        },
      },
      include: {
        access: true,
      },
    });

    return RoleMapper.toDomain(role);
  }
}
