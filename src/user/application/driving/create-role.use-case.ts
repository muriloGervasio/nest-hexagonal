import { CreateRoleCommand } from './create-role.command';

export abstract class CreateRoleUseCase {
  abstract execute(command: CreateRoleCommand): Promise<void>;
}
