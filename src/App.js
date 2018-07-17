import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Home, StyleGuide } from 'pages';
import { Nav, Content } from 'components';
import { AppStyled } from './App.styles';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   fetch('/posts')
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <BrowserRouter>
        <AppStyled>
          <Nav />
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/styleguide" component={StyleGuide} />
            <Route path="/topics" component={Topics} />
          </Content>
        </AppStyled>
      </BrowserRouter>
    );
  }
}

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;
