import assert from 'assert';
import { Given, When, Then } from '@cucumber/cucumber';

import type { Actor } from '@cucumber/screenplay';
// import type World from '../support/World';

import { Greeter } from '../../src/lib/greeter/index.js';

import { login } from '../support/tasks/dom/login.js';

interface MyWorld {
  whatIHeard: string;
}

When('the greeter says hello', function (this: MyWorld) {
  this.whatIHeard = new Greeter().sayHello();
});

Then('I should have heard {string}', function (this: MyWorld, expectedResponse: string) {
  assert.equal(this.whatIHeard, expectedResponse);
});

Given('{actor} has valid credentials', function (actor: Actor) {
  // Write code here that turns the phrase above into concrete actions
  //  return 'pending';
});

When('{actor} logs in', async function (this, actor: Actor) {
  console.log('=============', this, actor);
  // Write code here that turns the phrase above into concrete actions
  await actor.attemptsTo(login(`${actor.name}@test.com`, 'valid-password'));
});

Then('{actor} has a valid session', function (actor) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
