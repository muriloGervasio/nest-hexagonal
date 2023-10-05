export class RoleAccess {
  constructor(
    public name: string,
    public create: boolean,
    public read: boolean,
    public update: boolean,
    public remove: boolean,
  ) {}

  getName(): string {
    return this.name;
  }

  hasAccess(type: 'create' | 'read' | 'update' | 'remove'): boolean {
    return this[type];
  }
}
