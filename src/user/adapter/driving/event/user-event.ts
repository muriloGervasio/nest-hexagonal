import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { UserHasAccessCommand } from 'src/user/application/driving/user-has-access.command';
import { UserHasAccessUseCase } from 'src/user/application/driving/user-has-access.use-case';

@Injectable()
export class UserEvent {
  constructor(private readonly userHasAccessEvent: UserHasAccessUseCase) {}

  @OnEvent('user.has_access')
  handleUserHasAccessEvent(event: UserHasAccessCommand) {
    try {
      return this.userHasAccessEvent.execute(event);
    } catch (error) {
      console.log(error);
    }
  }
}
