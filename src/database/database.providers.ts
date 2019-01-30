import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.MONGO_URL || 'mongodb://chief:123456@ds131687.mlab.com:31687/secretfriend'),
  },
];