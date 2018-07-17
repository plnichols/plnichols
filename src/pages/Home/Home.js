import React from 'react';
import { Box, Divider, Heading, Hero } from 'components';

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

      <Box my={20}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam
          autem consequuntur deserunt doloremque harum illo nemo quae rerum
          veritatis? Ab beatae esse neque qui quos repellendus. Accusantium,
          placeat, voluptatem.
        </p>
      </Box>
    </Box>
  );
};

export { Home };
