import Router from 'next/router';

export const navigate = (url) => {
  Router.push(url);
};