import keyBy from 'lodash/keyBy';
import flatMap from 'lodash/flatMap';

const asyncActions = flatMap([
    'LOAD_REMEDIATIONS',
    'CREATE_REMEDIATIONS',
    'LOAD_REMEDIATION',
    'REFRESH_REMEDIATION',
    'PATCH_REMEDIATION',
    'DELETE_REMEDIATION',
    'DELETE_REMEDIATION_ISSUE',
    'PATCH_REMEDIATION_ISSUE'
], a => [ a, `${a}_PENDING`, `${a}_FULFILLED`, `${a}_REJECTED` ]);

export const ACTION_TYPES = keyBy([ ...asyncActions ], k => k);
