import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface BuildTheFutureWeb {
  'deleteEmailSubscriber' : ActorMethod<[string], boolean>,
  'getEmailSubscribers' : ActorMethod<[], Array<[string, EmailSubscriber]>>,
  'greet' : ActorMethod<[string], string>,
  'submitSignUpForm' : ActorMethod<[SignUpFormInput], string>,
}
export interface EmailSubscriber {
  'subscribedAt' : bigint,
  'emailAddress' : string,
  'pageSubmittedFrom' : string,
}
export interface SignUpFormInput {
  'emailAddress' : string,
  'pageSubmittedFrom' : string,
}
export interface _SERVICE extends BuildTheFutureWeb {}
