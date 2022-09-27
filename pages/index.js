import React from 'react';
import { userService } from 'services';

export default class Main extends React.Component {
  render () {
    return(
      <>
        <h1>Hello {userService.userValue?.firstName}!</h1>
      </>
    )
  }
}
