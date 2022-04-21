import type { Action, Actor } from '@cucumber/screenplay';

import type { Login } from '../types';

console.log('-=-=---=-=-=-=--=-=--=-=-=-=-=- login.ts');

export const login: Login = (email, password) => {
  return (actor: Actor) => {
    // Just a dummy implementation for now - we'll come back and flesh this out later
    return '42';
  };
};
