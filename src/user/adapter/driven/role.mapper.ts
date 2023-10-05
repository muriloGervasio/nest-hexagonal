import { RoleAcessEntity, RoleEntity } from '@prisma/client';
import { Role } from 'src/user/domain/role';
import { RoleAccess } from 'src/user/domain/role-access';

export class RoleMapper {
  static toDomain(role: RoleEntity & { access: RoleAcessEntity[] }): any {
    const accesses = role.access.map(
      (access) =>
        new RoleAccess(
          access.name,
          access.create,
          access.read,
          access.update,
          access.remove,
        ),
    );

    return new Role(role.description, accesses);
  }
}
