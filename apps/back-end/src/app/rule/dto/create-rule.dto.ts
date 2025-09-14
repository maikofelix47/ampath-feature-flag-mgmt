import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRuleDto {
  @IsNotEmpty()
  @IsString()
  featureFlagUuid: string;

  @IsNotEmpty()
  @IsString()
  attributeUuid: string;

  @IsNotEmpty()
  @IsString()
  operatorUuid: string;

  @IsNotEmpty()
  @IsString()
  value: string;
}
