import type { Action, PromiseAction } from '@cucumber/screenplay';

export type Login = (email: string, password: string) => Action<string>;

// import { Message } from '../../src/types'

// export type StartSession = () => PromiseAction;
// export type Shout = (message: Message) => Action;
// export type InboxMessages = () => Action<readonly Message[]>
