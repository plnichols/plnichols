import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, StyleGuide } from 'pages';
import { Nav, Content, Footer } from 'components';
import { AppStyled } from './App.styles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppStyled>
          <Nav />
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/styleguide" component={StyleGuide} />
          </Content>
          <Footer />
        </AppStyled>
      </BrowserRouter>
    );
  }
}

export default App;
