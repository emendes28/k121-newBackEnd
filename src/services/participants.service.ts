import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Participant } from '../participants/interfaces/participant.interface';

@Injectable()
export class ParticipantsService {

  constructor(
    @Inject('ParticipantModelToken')
    private readonly participantModel: Model<Participant>,
  ) {
  }

  async findAll(): Promise<Participant[]> {
    return await this.participantModel.find().exec();
  }

  async findByEmail(email: string): Promise<Participant> {
    const participant = await this.participantModel.findOne({ Email: email});
    return participant;
  }
}
