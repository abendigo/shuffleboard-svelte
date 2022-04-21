import { defineParameterType, setWorldConstructor } from '@cucumber/cucumber';
import { Actor, ActorParameterType, ActorWorld } from '@cucumber/screenplay';

// import { ActorWorld } from './actorWorld.js';

// import type { StartSession } from './tasks/types';

// Define an {actor} parameter type that creates Actor objects
defineParameterType(ActorParameterType);

// Define your own World class that extends from ActorWorld
export default class World {
  private readonly actorByName = new Map<string, Actor>();

  //extends ActorWorld {
  // Tasks
  // public startSession: StartSession;
  // public shout: Shout
  // public inboxMessages: InboxMessages

  constructor(options) {
    console.log('--- constructor', { options });
    // super(options);
  }

  public findOrCreateActor(actorName: string): Actor {
    console.log('find or create actor', actorName);

    let actor = this.actorByName.get(actorName);

    if (actor === undefined) {
      actor = new Actor(this, actorName);
      this.actorByName.set(actorName, actor);
    }

    return actor;
  }

  //   public get actors(): IterableIterator<Actor> {
  //     return this.actorByName.values()
  //   }
}

setWorldConstructor(World);
