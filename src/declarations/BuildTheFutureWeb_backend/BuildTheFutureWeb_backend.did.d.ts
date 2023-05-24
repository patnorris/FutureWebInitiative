import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface BuildTheFutureWeb { 'greet' : ActorMethod<[string], string> }
export interface _SERVICE extends BuildTheFutureWeb {}
