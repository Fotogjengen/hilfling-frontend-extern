/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { KClassSecurityLevel } from './KClassSecurityLevel';

export type SecurityLevel = {
    type?: string;
    id?: string;
    dateCreated?: string;
    properties?: Record<string, any>;
    entityClass?: KClassSecurityLevel;
}
