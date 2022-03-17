/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KClassPhotoGangBanger } from './KClassPhotoGangBanger';
import type { Position } from './Position';
import type { SamfundetUser } from './SamfundetUser';

export type PhotoGangBanger = {
    semesterStart?: string;
    relationshipStatus?: string;
    active?: boolean;
    pang?: boolean;
    samfundetUser?: SamfundetUser;
    position?: Position;
    address?: string;
    zipCode?: string;
    city?: string;
    id?: string;
    dateCreated?: string;
    properties?: Record<string, any>;
    entityClass?: KClassPhotoGangBanger;
}
