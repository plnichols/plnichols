import React, { Component } from 'react';
import {
  SkillsStyled,
  SkillsItemStyled,
  SkillsIconStyled,
  SkillsInfoStyled,
  SkillsNameStyled,
  SkillsDescStyled,
  SkillsProgressStyled
} from './Skills.styles';

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: []
    };
  }

  componentDidMount() {
    fetch('/data.json')
      .then(this.handleResponse)
      .then(this.handleJson.bind(this))
      .catch(this.handleError);
  }

  handleResponse(response) {
    if (!response.ok) {
      throw new Error('Error: [' + response.status + '] ' + response.statusText);
    }

    return response.json();
  }

  handleJson(json) {
    this.setState({
      skills: json.skills
    });
  }

  handleError(error) {
    console.error(error.message);
  }

  render() {
    const { skills } = this.state;

    return (
      <SkillsStyled>
        {skills.map((skill, index) => {
          return (
            <SkillsItemStyled key={index}>
              <SkillsIconStyled type={skill.icon} />
              <SkillsInfoStyled>
                <SkillsNameStyled>{skill.name}</SkillsNameStyled>
                <SkillsProgressStyled max={100} value={skill.value} />
                <SkillsDescStyled>{skill.description}</SkillsDescStyled>
              </SkillsInfoStyled>
            </SkillsItemStyled>
          );
        })}
      </SkillsStyled>
    );
  }
}

export { Skills };
