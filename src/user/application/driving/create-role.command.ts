import { Role } from 'src/user/domain/role';
import { RoleAccess } from 'src/user/domain/role-access';

export class CreateRoleCommand {
  constructor(
    public name: string,
    public access: {
      name: string;
      create: boolean;
      read: boolean;
      update: boolean;
      remove: boolean;
    }[],
  ) {}

  toRole() {
    const accesses = this.access.map((access) => {
      return new RoleAccess(
        access.name,
        access.create,
        access.read,
        access.update,
        access.remove,
      );
    });

    return new Role(this.name, accesses);
  }
}
