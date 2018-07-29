import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Home, StyleGuide } from 'pages';
import { Content, Footer } from 'components';
import { AppStyled } from './App.styles';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppStyled>
          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/styleguide" component={StyleGuide} />
            <Footer />
          </Content>
        </AppStyled>
      </BrowserRouter>
    );
  }
}

export default App;
