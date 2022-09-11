import React, { ReactElement, useEffect, useState } from 'react';
import { utilsFetch } from '../../utils/fetch';
import styles from './Skills.module.scss';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

interface Skill {
  icon: 'html' | 'javascript' | 'css' | 'react' | 'mobile' | 'sass' | 'git' | 'webpack' | 'npm' | 'angular';
  name: string;
  description: string;
  value: number;
}

const Skills = (): ReactElement | null => {
  const [loading, setLoading] = useState<boolean>(true);
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    utilsFetch<Skill[]>('/data/skills.json')
      .then((json) => {
        setSkills(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div aria-live="polite" aria-busy={loading}>
      {loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}

      {!loading && (
        <ul className={styles.ul}>
          {skills.map((skill, index) => {
            return (
              <li key={index} className={styles.li}>
                <Icon type={skill.icon} className={styles.icon} />
                <div className={styles.info}>
                  <div className={styles.name}>{skill.name}</div>
                  <progress max={100} value={skill.value} className={styles.progress} />
                  <p className={styles.description}>{skill.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Skills;
