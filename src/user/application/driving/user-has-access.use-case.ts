import { UserHasAccessCommand } from './user-has-access.command';

export abstract class UserHasAccessUseCase {
  abstract execute(command: UserHasAccessCommand): Promise<boolean>;
}
