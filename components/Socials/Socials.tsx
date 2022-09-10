import React, { ReactElement, useEffect, useState } from 'react';
import { utilsFetch } from '../../utils/fetch';
import styles from './Socials.module.scss';
import Icon from '../Icon/Icon';
import Loader from '../Loader/Loader';

interface Social {
  icon: 'codepen' | 'linkedin' | 'github';
  name: string;
  url: string;
}

const Socials = (): ReactElement | null => {
  const [loading, setLoading] = useState<boolean>(true);
  const [socials, setSocials] = useState<Social[]>([]);

  useEffect(() => {
    utilsFetch<Social[]>('/data/socials.json')
      .then((json) => {
        setSocials(json);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return null;

  if (!loading) {
    return (
      !loading && (
        <ul className={styles.ul}>
          {socials.map((social, index) => {
            return (
              <li key={index} className={styles.li}>
                <a href={social.url} target="_blank" title={social.name} className={styles.link}>
                  <Icon type={social.icon} className={styles.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      )
    );
  }
};

export default Socials;
