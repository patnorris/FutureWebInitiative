export const idlFactory = ({ IDL }) => {
  const SignUpFormInput = IDL.Record({
    'emailAddress' : IDL.Text,
    'pageSubmittedFrom' : IDL.Text,
  });
  const BuildTheFutureWeb = IDL.Service({
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'submitSignUpForm' : IDL.Func([SignUpFormInput], [IDL.Text], []),
  });
  return BuildTheFutureWeb;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
