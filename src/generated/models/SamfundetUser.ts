/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KClassSamfundetUser } from './KClassSamfundetUser';
import type { SecurityLevel } from './SecurityLevel';

export type SamfundetUser = {
    securityLevel?: SecurityLevel;
    email?: string;
    username?: string;
    profilePicture?: string;
    phoneNumber?: string;
    sex?: string;
    firstName?: string;
    lastName?: string;
    id?: string;
    dateCreated?: string;
    properties?: Record<string, any>;
    entityClass?: KClassSamfundetUser;
}
