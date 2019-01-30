import { Test, TestingModule } from '@nestjs/testing';
import { ParticipantsController } from './participants.controller';
import { ParticipantsService } from '../services/participants.service';
import { async } from 'rxjs/internal/scheduler/async';

describe('Participant Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ParticipantsController],
      providers: [ParticipantsService],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ParticipantsController = module.get<ParticipantsController>(ParticipantsController);
    expect(controller).toBeDefined();
  });
  describe('get (findAll)', () => {
    it('should return an array of participants', async () => {
      const result = ['test'];
      const participantController = module.get<ParticipantsController>(ParticipantsController);
      const participantService = module.get<ParticipantsService>(ParticipantsService);
      jest.spyOn(participantService, 'findAll').mockImplementation(() => result);
      expect(await participantController.findAll()).toBe(result);
    });
  });
});
