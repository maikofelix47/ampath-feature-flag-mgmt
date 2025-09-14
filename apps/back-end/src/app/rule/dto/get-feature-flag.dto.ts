import { IsNotEmpty, IsString } from 'class-validator';
import { FeatureFlagContext } from '../types';

export class GetFeatureFlagDto {
  @IsNotEmpty()
  @IsString()
  public readonly featureFlagName: string;

  @IsNotEmpty()
  public readonly context: FeatureFlagContext;
}
