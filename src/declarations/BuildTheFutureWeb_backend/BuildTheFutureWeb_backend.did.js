export const idlFactory = ({ IDL }) => {
  const EmailSubscriber = IDL.Record({
    'subscribedAt' : IDL.Nat64,
    'emailAddress' : IDL.Text,
    'pageSubmittedFrom' : IDL.Text,
  });
  const SignUpFormInput = IDL.Record({
    'emailAddress' : IDL.Text,
    'pageSubmittedFrom' : IDL.Text,
  });
  const BuildTheFutureWeb = IDL.Service({
    'deleteEmailSubscriber' : IDL.Func([IDL.Text], [IDL.Bool], []),
    'getEmailSubscribers' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, EmailSubscriber))],
        [],
      ),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'submitSignUpForm' : IDL.Func([SignUpFormInput], [IDL.Text], []),
  });
  return BuildTheFutureWeb;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
