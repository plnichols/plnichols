import React, { Component } from 'react';
import { ApiRequest } from 'utilities';
import { SocialStyled, SocialItemStyled, SocialLinkStyled, SocialIconStyled } from './Social.styles';

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {
      links: []
    };
  }

  componentDidMount() {
    fetch('/data/social-links.json')
      .then(ApiRequest.handleResponse)
      .then(this.handleJson.bind(this))
      .catch(ApiRequest.handleError);
  }

  handleJson(json) {
    this.setState({
      links: json.links
    });
  }

  render() {
    const { links } = this.state;

    return (
      <SocialStyled>
        {links.map((link, index) => {
          return (
            <SocialItemStyled key={index}>
              <SocialLinkStyled href={link.url} target="_blank" title={link.name}>
                <SocialIconStyled type={link.icon} />
              </SocialLinkStyled>
            </SocialItemStyled>
          );
        })}
      </SocialStyled>
    );
  }
}

export { Social };
