import { getRegistry } from '@red-hat-insights/insights-frontend-components/';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './reducers';

let registry;

export function init (...middleware) {
    if (registry) {
        throw new Error('store already initialized');
    }

    registry = getRegistry({}, [
        promiseMiddleware(),
        ...middleware
    ]);

    registry.register(reducers);
    return registry;
}

export function getStore () {
    return registry.getStore();
}

export function register (...args) {
    return registry.register(...args);
}
