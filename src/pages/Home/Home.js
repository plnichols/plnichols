import React from 'react';
import { Box, Divider, Heading, Hero, Icon, Skills } from 'components';

const Home = () => {
  return (
    <Box mt={50}>
      <Hero>
        <Heading h1>Hi.</Heading>
        <Heading h2>I'm Pierre Luc Nichols</Heading>
        <Heading h3>Front End Developer</Heading>
        <Heading h4>London, UK</Heading>
      </Hero>

      <Divider my={80} />

      <Box>
        <Heading h2>Skills</Heading>
        <Heading h3>Here's an overview of the technologies I'm particularly good at:</Heading>
      </Box>

      <Box my={60}>
        <Skills />
      </Box>

      <Divider my={80} />

      <Box my={40}>
        <Icon type="html" style={{ padding: '5px' }} />
        <Icon type="css" />
        <Icon type="git" />
        <Icon type="codepen" />
        <Icon type="linkedin" />
        <Icon type="github" />
        <Icon type="code" />
        <Icon type="mobile" />
        <Icon type="react" size={64} />
        <Icon type="angular" width={16} />
        <Icon type="webpack" height={64} size={128} />
      </Box>

      <Divider my={80} />

      <Box my={20}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam autem consequuntur deserunt doloremque
          harum illo nemo quae rerum veritatis? Ab beatae esse neque qui quos repellendus. Accusantium, placeat,
          voluptatem.
        </p>
      </Box>
    </Box>
  );
};

export { Home };
