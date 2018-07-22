import styled from 'styled-components';
import { Icon } from 'components';
import { color } from 'theme';

const SkillsStyled = styled.ul`
  margin: 0;
  padding: 0;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const SkillsItemStyled = styled.li`
  display: flex;
  margin: 0 0 60px 0;
  padding: 0;

  @media screen and (min-width: 576px) {
    flex: 1 0 auto;
    max-width: 45%;
  }
`;

const SkillsIconStyled = styled(Icon)`
  margin: 0;
  padding: 0;
  font-size: 64px;
  fill: ${color.primary.l500};
`;

const SkillsInfoStyled = styled.div`
  flex: 1;
  margin-left: 20px;
  color: ${color.text};
`;

const SkillsNameStyled = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 1;
`;

const SkillsDescStyled = styled.p`
  margin: 0.5em 0 0.25em 0;
  font-size: 1.6rem;
  font-weight: 100;
  line-height: 1.5;
`;

const SkillsProgressStyled = styled.progress`
  width: 100%;
  height: 8px;
  margin-top: 13px;
  color: #00a1d6;
  appearance: none;
  border: none;
  border-radius: 3px;
  background-color: ${color.primary.base};

  &::-webkit-progress-bar {
    border-radius: 3px;
    background: 0 0;
  }

  &::-webkit-progress-value {
    position: relative;
    border-radius: 3px;
    background: linear-gradient(to right, ${color.primary.l500}, ${color.primary.l100});
  }

  &::-moz-progress-bar {
    border-radius: 3px;
    background: linear-gradient(to right, #00a1d6, #3dcfff);
  }
`;

export {
  SkillsStyled,
  SkillsItemStyled,
  SkillsIconStyled,
  SkillsInfoStyled,
  SkillsNameStyled,
  SkillsDescStyled,
  SkillsProgressStyled
};
