import React from 'react';
import ReactDOM from 'react-dom'; // you used 'react-dom' as 'ReactDOM'


export function UserGreeting(props) {

    return <h1>Welcome back!</h1>;
}
  
export function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}
  
export function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
  
  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
  
//   export default {UserGreeting, GuestGreeting, Greeting}