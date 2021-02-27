import React from 'react';

function About() {
  return (
    <article>
      <h2>About:</h2>
      <p>
        Challenge purprosed by
        {' '}
        <a href="https://indianatechnologies.dev">indianatechnologies.dev</a>
        {' '}
        on Wed, Feb 24 at 12:57 PM GMT-03.
      </p>

      <h2>Challenge:</h2>
      <p>
        Assume this project is for a large retailer (ElectronicX).
      </p>
      <p>
        Assume the items they sell can be any electronic product: Radio, Computer,
        Cellphone, Headphones, etc.
      </p>
      <p>
        Assume the retailer wants to be able to create new items.
      </p>
      <h2>Requirements:</h2>
      <h3>Frontend: React</h3>
      <ul>
        <li>(site + /public) [Public], list items.</li>
        <li>(site + /admin) [Authentication required] CRUD items.</li>
        <li>Unit testing (obligatory)</li>
      </ul>
      <h3>Backend: your choice</h3>
      <ul>
        <li>
          Secure Authentication
          <ul>
            <li>Login</li>
            <li>Register</li>
          </ul>
        </li>
        <li>CRUD Items</li>
        <li>Unit testing (obligatory)</li>
      </ul>
      <h3>Database: your choice</h3>
      <ul>
        <li>
          Item
          <ul>
            <li>Name</li>
            <li>Price</li>
            <li>Image (optional)</li>
            <li>Quantity</li>
            <li>Category (FK)</li>
          </ul>
        </li>
        <li>
          Category
          <ul>
            <li>Name</li>
          </ul>
        </li>
        <li>
          Users
          <ul>
            <li>Username</li>
            <li>Password</li>
          </ul>
        </li>
      </ul>
      <p>
        You have 4 days to finish.
        If you can’t finish the assignment in time, please write in English in the
        <a href="https://github.com/bisk8s/ElectronicX/blob/master/README.md">README.md</a>
        howyou would finish the assignment.
      </p>
      <p>
        Some of the things are left out on purpose, add your personal style.
        Upload the finished project to github and send the link to the repo.
      </p>
    </article>
  );
}

export default About;
