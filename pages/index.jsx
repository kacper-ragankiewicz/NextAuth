import React, { useEffect, useState } from 'react';
import Home from 'screens/Home';
import { userService } from 'services';

import { api } from 'helpers';

export default Main

function Main({hero}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);

  if (!user) {
    return (
      <h1>You need to log in!</h1>
    )
  }

  return (
    <Home hero={hero} />
  );
}

  export async function getStaticProps() {
    const { data, status } = await api.get('/entries');
    if (status !== 200 ) {
      return {
        props: {
          isRequestFailed: true,
        }
      }
    }
    const { count, entries } = data;
    const hero = entries?.map(({id, API, Description, Link, Category}) => ({ API, Description, Link, Category }));
    return {
      props: {
        count,
        hero,
        isRequestFailed: false,
        test: true,
      }
    }
  }
