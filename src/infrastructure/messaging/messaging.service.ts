import { Global, Injectable, Module } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { UserHasAccessCommand } from 'src/user/application/driving/user-has-access.command';

@Injectable()
export class MessagingService extends EventEmitter2 {
  constructor() {
    super();
  }

  async userHasAccessToResource(
    userId: number,
    resource: string,
  ): Promise<boolean> {
    const [res, action] = resource.split('.');

    const isAction = (
      act: string,
    ): act is 'create' | 'read' | 'update' | 'remove' =>
      ['create', 'read', 'update', 'remove'].includes(act);

    if (!isAction(action)) throw new Error('Invalid action');

    const [access] = await this.emitAsync(
      'user.has_access',
      new UserHasAccessCommand(userId, res, action),
    );
    return access;
  }
}

@Global()
@Module({
  providers: [MessagingService],
  exports: [MessagingService],
})
export class MessagingModule {}
