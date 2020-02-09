import { BaseInterface } from './BaseInterface';
import { Position } from './Position';

export interface PhotoGangBangerPosition extends BaseInterface {
  position: Position;
  current: boolean;
}
