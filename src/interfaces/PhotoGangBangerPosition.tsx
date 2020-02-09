import { BaseModel } from './BaseModel';
import { Position } from './Position';

export interface PhotoGangBangerPosition extends BaseModel {
  position: Position;
  current: boolean;
}
