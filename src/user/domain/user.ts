import { Role } from './role';

export class User {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly role: Role,
  ) {}
}
