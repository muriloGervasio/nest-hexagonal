export class UserHasAccessCommand {
  constructor(
    public readonly userId: number,
    public readonly resource: string,
    public readonly action: 'create' | 'read' | 'update' | 'remove',
  ) {}
}
