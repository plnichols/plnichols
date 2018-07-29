import React from 'react';
import { Box, Button, Divider, Row, Col, Heading, List, ListItem } from 'components';

const StyleGuide = () => (
  <div>
    <Box mt={60}>
      <Heading h1>Styleguide</Heading>
    </Box>

    <Box mt={80}>
      <Heading h3>Headings</Heading>
      <Divider my={20} />
      <Heading h1>H1 Lorem ipsum sit dolor</Heading>
      <Heading h2>H2 Aenean commodo li</Heading>
      <Heading h3>H3 Aedolor aenean massa</Heading>
      <Heading h4>H4 Aeo ligula eget do massa</Heading>
      <Heading h5>H5 Aeget dolor assa</Heading>
      <Heading h6>H6 Digula eget dolor ae</Heading>
    </Box>

    <Box mt={80}>
      <Heading h3>Typography</Heading>
      <Divider my={20} />
      <p>
        Lorem ipsum dolor sit amet, consndis tempora! Adiarum esse eveniet incidunt pariatur porro suscipit voluptatem.
        Dolore, ut?
      </p>
      <p>
        <strong>Strong text</strong>
      </p>
      <p>
        <em>Italic text</em>
      </p>
      <p>
        <a href="#anchor">anchor link</a>
      </p>
    </Box>

    <Box mt={80}>
      <Heading h3>Font size</Heading>
      <Divider my={20} />
      <p>
        <span style={{ fontWeight: 100 }}>font weight 100</span>
      </p>
      <p>
        <span style={{ fontWeight: 300 }}>font weight 300</span>
      </p>
      <p>
        <span style={{ fontWeight: 400 }}>font weight 400</span>
      </p>
      <p>
        <span style={{ fontWeight: 700 }}>font weight 700</span>
      </p>
      <p>
        <span style={{ fontWeight: 900 }}>font weight 900</span>
      </p>
    </Box>

    <Box mt={80}>
      <Heading h3>Button</Heading>
      <Divider my={20} />

      <Row my={20}>
        <Col xs={3}>Primary</Col>
        <Col>
          <Button primary>Primary</Button>
        </Col>
        <Col>
          <Button primary outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button primary outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Secondary</Col>
        <Col>
          <Button secondary>Secondary</Button>
        </Col>
        <Col>
          <Button secondary outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button secodnary outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>White</Col>
        <Col>
          <Button white>White</Button>
        </Col>
        <Col>
          <Button white outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button white outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Small</Col>
        <Col>
          <Button small>Small</Button>
        </Col>
        <Col>
          <Button small outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button small outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Rounded</Col>
        <Col>
          <Button rounded>Rounded</Button>
        </Col>
        <Col>
          <Button rounded outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button rounded outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Rounded small</Col>
        <Col>
          <Button rounded small>
            Small
          </Button>
        </Col>
        <Col>
          <Button rounded small outline>
            Outline
          </Button>
        </Col>
        <Col>
          <Button rounded small outline disabled>
            Disabled
          </Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Form</Col>
        <Col xs={3}>
          <Button type="submit">Submit</Button>
        </Col>
        <Col xs={3}>
          <Button type="reset">Reset</Button>
        </Col>
      </Row>

      <Row my={20}>
        <Col xs={3}>Anchor link</Col>
        <Col>
          <Button anchor href="#anchor">
            Link
          </Button>
        </Col>
        <Col>
          <Button anchor white href="#anchor">
            White
          </Button>
        </Col>
        <Col>
          <Button anchor white outline href="#anchor">
            Outline
          </Button>
        </Col>
      </Row>
    </Box>

    <Box mt={80}>
      <Heading h3>Unordered list</Heading>
      <Divider my={20} />
      <List>
        <ListItem>
          Lorem ipsum dolor
          <List>
            <ListItem>Item 1.1</ListItem>
            <ListItem>
              Item 1.2
              <List>
                <ListItem>Item 1.2.1</ListItem>
                <ListItem>Item 1.2.2</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
        <ListItem>Aenean commodo ligula eget dolor.</ListItem>
        <ListItem>Aenean massa cum sociis natoque penatibus.</ListItem>
      </List>
    </Box>

    <Box mt={80}>
      <Heading h3>Ordered list</Heading>
      <Divider my={20} />
      <List ordered>
        <ListItem>Lorelor sit amet consectetuer.</ListItem>
        <ListItem>Aenean commodo ligula eget dolor.</ListItem>
        <ListItem>
          Sdo ligula eget dolor:
          <List ordered>
            <ListItem>Item 3.1</ListItem>
            <ListItem>
              Item 3.2
              <List ordered>
                <ListItem>Item 3.2.1</ListItem>
                <ListItem>Item 3.2.2</ListItem>
              </List>
            </ListItem>
            <ListItem>Item 3.3</ListItem>
          </List>
        </ListItem>
        <ListItem>Aeneum sociis natoque penatibus.</ListItem>
      </List>
    </Box>

    <Box mt={80}>
      <Heading h3>Code</Heading>
      <Divider my={20} />
      <pre>console.log('Hello world!');</pre>
    </Box>

    <Box mt={80}>
      <Heading h3>Table</Heading>
      <Divider my={20} />
      <table>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
            <th>Header 4</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1 Col 1</td>
            <td>Row 1 Col 2</td>
            <td>Row 1 Col 3</td>
            <td>Row 1 Col 4</td>
          </tr>
          <tr>
            <td>Row 2 Col 1</td>
            <td>Row 2 Col 2</td>
            <td>Row 2 Col 3</td>
            <td>Row 2 Col 4</td>
          </tr>
          <tr>
            <td>Row 3 Col 1</td>
            <td>Row 3 Col 2</td>
            <td>Row 3 Col 3</td>
            <td>Row 3 Col 4</td>
          </tr>
        </tbody>
      </table>
    </Box>
  </div>
);

export { StyleGuide };
