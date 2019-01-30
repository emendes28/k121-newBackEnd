import { Connection } from 'mongoose';
import { ParticipantSchema } from './schemas/participant.schema';

export const participantsProviders = [
  {
    provide: 'ParticipantModelToken',
    useFactory: (connection: Connection) => connection.model('Participant', ParticipantSchema),
    inject: ['DbConnectionToken'],
  },
];