export const Config: IConfig = {
  freight: {
    currency: 'USD',
  },
  roles: {
    create: 'dynamic',
  },
};

export abstract class IConfig {
  freight: {
    currency: 'USD' | 'BRL';
  };
  roles: {
    create: 'predefined' | 'dynamic';
  };
}
