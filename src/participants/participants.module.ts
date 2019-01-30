import { Module } from '@nestjs/common';
import { ParticipantsController } from './participants.controller';
import { ParticipantsService } from '../services/participants.service';
import { DatabaseModule } from '../database/database.module';
import { participantsProviders } from './participants.providers';

@Module({
  imports: [
    DatabaseModule,
  ],
  controllers: [
    ParticipantsController,
  ],
  providers: [
    ParticipantsService,
    ...participantsProviders,
  ],
})
export class ParticipantsModule {}
