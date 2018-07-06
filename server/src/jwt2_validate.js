import Knex from './knex';

const JWT2Validate = async (decoded, request) => {
  const isValid = await Knex('users').where('username', decoded.username).select(
    'guid'
  ).then(([user]) => {
    console.log([user]);
    if (!user) {
      return { isValid: false };
    }
    return { isValid: true };
  }).catch((err) => {
    console.log(err);
    return { isValid: false };
  });

  console.log(isValid);

  return isValid;
};
export { JWT2Validate };