import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import HelloHandler from './hello.js';
import MenuContainer from './test.js';

function test(){
    ReactDOM.render(
      <MenuContainer></MenuContainer>,
      document.getElementById('container')
    );
}
test();
// var ExampleApplication = React.createClass({
//     render: function() {
//       var elapsed = Math.round(this.props.elapsed  / 100);
//       var seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
//       var message =
//         'React has been successfully running for ' + seconds + ' seconds.';

//       return React.DOM.p(null, message);
//     }
//   });

//   // Call React.createFactory instead of directly call ExampleApplication({...}) in React.render
//   var ExampleApplicationFactory = React.createFactory(ExampleApplication);

//   var start = new Date().getTime();
//   setInterval(function() {
//     ReactDOM.render(
//       ExampleApplicationFactory({elapsed: new Date().getTime() - start}),
//       document.getElementById('container')
//     );
//   }, 50);


// let App = React.createClass({
//   render() {
//     return (
//       <div className="nav">
//         <Link to="app" className="homelink">Home  </Link>
//         <Link to="hello" className="hellolink">  Say Hello</Link>
//         {/* this is the importTant part */}
//         <RouteHandler/>
//       </div>
//     );
//   }
// });

// let routes = (
//   <Route name="app" path="/" handler={App}>
//     <Route name="hello" path="/hello" handler={HelloHandler}/>
//   </Route>
// );

// Router.run(routes, function (Handler) {
//   React.render(<Handler />, document.body);
// });
