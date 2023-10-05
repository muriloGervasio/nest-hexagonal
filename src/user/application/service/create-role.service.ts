import { Injectable } from '@nestjs/common';
import { CreateRoleUseCase } from '../driving/create-role.use-case';
import { CreateRoleCommand } from '../driving/create-role.command';
import { RoleRepository } from '../driven/role.repository';
import { CompanyConfig } from 'src/core/facade/company.decorator';
import { CompanyConfigValue } from 'src/core/facade/company-config.decorator';
import { Facade } from 'src/core/facade/facade.class';
import { IConfig } from 'src/core/config/config';

@Injectable()
@CompanyConfig('roles.create')
export class CreateRoleService
  extends Facade<Promise<void>>
  implements CreateRoleUseCase
{
  constructor(
    config: IConfig,
    private readonly roleRepository: RoleRepository,
  ) {
    super(config);
  }

  @CompanyConfigValue('dynamic')
  executeDynamic(command: CreateRoleCommand): Promise<void> {
    const role = command.toRole();
    return this.roleRepository.create(role);
  }

  @CompanyConfigValue('predefined')
  executePredefined(command: CreateRoleCommand): Promise<void> {
    const role = command.toRole();
    return this.roleRepository.create(role);
  }
}
