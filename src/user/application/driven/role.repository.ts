import { Role } from 'src/user/domain/role';

export abstract class RoleRepository {
  abstract create(name: Role): Promise<void>;
}
