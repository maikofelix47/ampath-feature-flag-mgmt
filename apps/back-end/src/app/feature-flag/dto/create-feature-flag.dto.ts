import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
export class CreateFetaureFlagDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  on: boolean;
}
