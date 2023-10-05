import { RoleAccess } from './role-access';

export class Role {
  constructor(
    public readonly name: string,
    public readonly access: RoleAccess[],
  ) {}

  hasAccess(
    name: string,
    type: 'create' | 'read' | 'update' | 'remove',
  ): boolean {
    return this.access
      .find((access) => access.getName() === name)
      .hasAccess(type);
  }
}
