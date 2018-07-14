import React from 'react';
// import { Title, Wrapper } from './StyleGuide.styles';

const StyleGuide = ({ title }) => (
  <div>
    <h1>H1 {title}</h1>
    <h2>H2 Aenean commodo ligula eget dolor aenean massa</h2>
    <h3>H3 Aedolor aenean massa</h3>
    <h4>H4 Aeo ligula eget dolor aenean massa</h4>
    <h5>H5 Aeget dolor aenean massa</h5>
    <h6>H6 Digula eget dolor aenean massa</h6>

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

    <ul>
      <li>
        Lorem ipsum dolor
        <ul>
          <li>Item 1.1</li>
          <li>Item 1.2</li>
        </ul>
      </li>
      <li>Aenean commodo ligula eget dolor.</li>
      <li>Aenean massa cum sociis natoque penatibus.</li>
    </ul>

    <ol>
      <li>Lorelor sit amet consectetuer.</li>
      <li>Aenean commodo ligula eget dolor.</li>
      <li>
        Sdo ligula eget dolor:
        <ol>
          <li>Item 3.1</li>
          <li>Item 3.2</li>
          <li>Item 3.3</li>
        </ol>
      </li>
      <li>Aeneum sociis natoque penatibus.</li>
    </ol>

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
