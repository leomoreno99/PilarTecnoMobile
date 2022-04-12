import { LOG_IN } from "../constants";

const initialState = {
  user: false,
  name: 'Leonel Moreno',
  email: 'user@mail.com',
};

export default (state = initialState, {type, data}) => {
  // const { user, email } = data
  console.log(data)
  if (type === LOG_IN) {
    return {
      ...state, 
      // data
      user: data.user,
      email: data.email
    };
  }
  return { ...state };
};
