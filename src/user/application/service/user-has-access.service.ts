import { Injectable } from '@nestjs/common';
import { UserHasAccessCommand } from '../driving/user-has-access.command';
import { UserHasAccessUseCase } from '../driving/user-has-access.use-case';
import { RoleRepository } from '../driven/role.repository';

@Injectable()
export class UserHasAccessService implements UserHasAccessUseCase {
  constructor(private readonly roleRepository: RoleRepository) {}
  async execute(command: UserHasAccessCommand): Promise<boolean> {
    const role = await this.roleRepository.findByNameAndUserId(command.userId);

    return role.hasAccess(command.resource, command.action);
  }
}
