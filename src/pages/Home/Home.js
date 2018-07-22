import React from 'react';
import { Box, Button, Divider, Heading, Hero, Skills } from 'components';

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

      <Heading h2>Skills</Heading>
      <Heading h3>Here's an overview of the technologies I'm particularly good at:</Heading>

      <Box my={60}>
        <Skills />
      </Box>

      <Divider my={80} />

      <Box my={60}>
        <Heading h2>Let's talk!</Heading>
        <Heading h3>Get in touch to enquire about my availability</Heading>

        <Button my={20} anchor white outline href="mailto:pierrelucnichols&#64;gmail&#46;com">
          Email me
        </Button>
      </Box>
    </Box>
  );
};

export { Home };
