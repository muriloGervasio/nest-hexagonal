import { IConfig } from '../config/config';

function getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

export class Facade<T> {
  constructor(private readonly config: IConfig) {}

  execute(): T {
    const exec = Reflect.getMetadata('executor', this);
    const config = Reflect.getMetadata('companyConfig', this);
    return exec.get(getNestedValue(this.config, config))();
  }
}
