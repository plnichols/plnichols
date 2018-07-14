import React from 'react';
import { Heading, List, ListItem } from '../../components';

const StyleGuide = ({ title }) => (
  <div>
    <Heading h1>H1 Lorem ipsum sit dolor</Heading>
    <Heading h2>H2 Aenean commodo li</Heading>
    <Heading h3>H3 Aedolor aenean massa</Heading>
    <Heading h4>H4 Aeo ligula eget do massa</Heading>
    <Heading h5>H5 Aeget dolor assa</Heading>
    <Heading h6>H6 Digula eget dolor ae</Heading>

    <p>
      Paragraph lorem ipsum dolor sit amet, <em>adipiscing elit</em>. Aenean
      commodo ligula eget dolor. Aenean massa <strong>strong</strong>. Cum im
      justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede <a href="#link">link</a> mollis pretium.{' '}
      <u>Integer tincids nisi</u>.
    </p>

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

    <blockquote>Blockquote ipsum sit dolor amsr.</blockquote>

    <p>
      <a href="#anchor">Anchor button</a>
    </p>
    <p>
      <button>Button element</button>
    </p>
    <p>
      <input type="submit" value="submit input" />
    </p>
    <p>
      <input type="button" value="button input" />
    </p>

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

    <form action="#post" method="post">
      <fieldset>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" placeholder="Enter your full name" />
      </fieldset>

      <fieldset>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email address" />
      </fieldset>

      <fieldset>
        <label htmlFor="message">Message:</label>
        <textarea id="message" placeholder="What's on your mind?" />
      </fieldset>

      <fieldset>
        <select>
          <option value="Option 1">Questions</option>
          <option value="Option 2">Admiration</option>
          <option value="Option 3">Can I get your number?</option>
        </select>
      </fieldset>

      <fieldset>
        <label>
          <input type="checkbox" />
          <span>Send a copy to yourself</span>
        </label>
      </fieldset>

      <fieldset>
        <input type="submit" value="Send message" />
      </fieldset>
    </form>

    <pre>console.log('hello');</pre>

    <table>
      <thead>
        <tr>
          <th>Entry Header 1</th>
          <th>Entry Header 2</th>
          <th>Entry Header 3</th>
          <th>Entry Header 4</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Entry First Line 1</td>
          <td>Entry First Line 2</td>
          <td>Entry First Line 3</td>
          <td>Entry First Line 4</td>
        </tr>
        <tr>
          <td>Entry Line 1</td>
          <td>Entry Line 2</td>
          <td>Entry Line 3</td>
          <td>Entry Line 4</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export { StyleGuide };
