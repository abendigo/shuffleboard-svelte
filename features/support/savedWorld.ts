import { defineParameterType, setWorldConstructor } from '@cucumber/cucumber';
import { ActorWorld, ActorParameterType } from '@cucumber/screenplay';

import type { Login } from './tasks/types';

// Define an {actor} parameter type that creates Actor objects
// defineParameterType(ActorParameterType);

// Define your own World class that extends from ActorWorld
export default class World extends ActorWorld {
  public login: Login;

  constructor(options) {
    console.log('--- constructor', { options });
    super(options);
  }
}

setWorldConstructor(World);
