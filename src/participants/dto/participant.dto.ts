import { ApiModelProperty } from '@nestjs/swagger';

export class ParticipantDto {

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly email: string;

    @ApiModelProperty()
    readonly friend: string;
}