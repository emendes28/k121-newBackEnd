import { Model } from 'mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantsService } from './participants.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Participant } from '../participants/interfaces/participant.interface';
import { ParticipantDto } from '../participants/dto/participant.dto';

describe('ParticipantService', () => {
  let service: ParticipantsService;
  let participantModel: Model<Participant>;

  it('should be defined', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipantsService],
      imports: [MongooseModule],
    }).compile();
    participantModel = module.get<MongooseModule>(MongooseModule);
    service = module.get<ParticipantsService>(participantModel);
    expect(service).toBeDefined();
  });

  it('should return an array of participants', async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParticipantsService],
      imports: [MongooseModule],
    }).compile();
    participantModel = module.get<MongooseModule>(MongooseModule);
    service = module.get<ParticipantsService>(participantModel);
    const participant = new ParticipantDto();
    const result: Participant[] = [participant];
    jest.spyOn(participantModel, 'find').mockImplementation(() => result);
    expect(await service.findAll()).toBe(result);
  });
});
