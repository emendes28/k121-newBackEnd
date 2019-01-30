import { Controller, Get, Param } from '@nestjs/common';
import { ParticipantsService } from '../services/participants.service';
import { Participant } from './interfaces/participant.interface';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('participants')
export class ParticipantsController {
  constructor(private readonly participantsService: ParticipantsService) {}

  @Get()
  async findAll(): Promise<Array<Participant>> {
    const participants = await this.participantsService.findAll();
    return participants;
  }

  @Get('/:email')
  @ApiImplicitParam({ name: 'email', required: true, type: 'string' })
  async findParticipant(@Param('email') email: string)
  : Promise<Participant> {
    return await this.participantsService
                     .findByEmail(email);
  }
}
