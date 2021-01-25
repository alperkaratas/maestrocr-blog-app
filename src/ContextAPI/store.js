/* eslint-disable no-undef */
import {createContext} from 'react';

export const initialState = {
  data: {
    postId: 0,
    totalReadingTime: 0,
    banner: '',
    image: '',
    title: '',
    summary: '',
    content: '',
    createdAt: '',
    counter: 0,
  },
};

export default Context = createContext(initialState);
