import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface BuildTheFutureWeb {
  'greet' : ActorMethod<[string], string>,
  'submitSignUpForm' : ActorMethod<[SignUpFormInput], string>,
}
export interface SignUpFormInput {
  'emailAddress' : string,
  'pageSubmittedFrom' : string,
}
export interface _SERVICE extends BuildTheFutureWeb {}
