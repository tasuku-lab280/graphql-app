// Type
export type errors = {
  __typename: 'UserError';
  attribute: string | null;
  messages: string[];
};

// Function
export const errorsFor = (attr: string, errors?: Array<errors>) => {
  if (!errors) return [];
  const error = errors.find((err) => err.attribute === attr);
  if (!error) return [];
  return error.messages;
};
