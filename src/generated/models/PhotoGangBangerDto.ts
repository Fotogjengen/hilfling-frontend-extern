/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PhotoGangBangerId } from './PhotoGangBangerId';
import type { PositionDto } from './PositionDto';
import type { SamfundetUserDto } from './SamfundetUserDto';
import type { SemesterStart } from './SemesterStart';

export type PhotoGangBangerDto = {
    photoGangBangerId?: PhotoGangBangerId;
    relationShipStatus?: RelationShipStatus;
    semesterStart?: SemesterStart;
    address?: string;
    zipCode?: string;
    city?: string;
    samfundetUser?: SamfundetUserDto;
    position?: PositionDto;
    active?: boolean;
    pang?: boolean;
}

export enum RelationShipStatus {
    SINGLE = 'single',
    RELATIONSHIP = 'relationship',
    MARRIED = 'married',
}