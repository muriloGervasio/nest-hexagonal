import { IsArray, IsBoolean, IsString, ValidateNested } from 'class-validator';
import { CreateRoleCommand } from 'src/user/application/driving/create-role.command';

export class CreateRoleRequest {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  access: CreateRoleAccessRequest[];

  toCommand(): CreateRoleCommand {
    return new CreateRoleCommand(
      this.name,
      this.access.map((access) => {
        return {
          name: access.name,
          create: access.create,
          read: access.read,
          update: access.update,
          remove: access.remove,
        };
      }),
    );
  }
}

export class CreateRoleAccessRequest {
  @IsString()
  name: string;

  @IsBoolean()
  create: boolean;

  @IsBoolean()
  read: boolean;

  @IsBoolean()
  update: boolean;

  @IsBoolean()
  remove: boolean;
}
