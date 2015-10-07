/* @flow */

import { match } from 'react-router';

export const RouterResult = {
  NOT_FOUND: 'notFound',
  ERROR: 'error',
  REDIRECT: 'redirect',
};


export type Location = {
  pathname: string;
  search: ?string;
};

export function getRoutingContext(routes: ?{}, location: Location): Promise {
  return new Promise((resolve, reject) => {
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        reject({ errorType: RouterResult.REDIRECT, redirectLocation });
      } else if (error) {
        reject({ errorType: RouterResult.ERROR, error });
      } else if (typeof renderProps === 'undefined') {
        reject({ errorType: RouterResult.NOT_FOUND });
      } else {
        resolve(renderProps);
      }
    });
  });
}
