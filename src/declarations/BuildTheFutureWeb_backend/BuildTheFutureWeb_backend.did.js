export const idlFactory = ({ IDL }) => {
  const BuildTheFutureWeb = IDL.Service({
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
  return BuildTheFutureWeb;
};
export const init = ({ IDL }) => { return [IDL.Principal]; };
