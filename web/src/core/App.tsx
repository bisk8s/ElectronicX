import React from 'react';
import Headline from '@components/styled/Headline';
import Wrapper from '@components/styled/Wrapper';
import Home from '@screens/Home';

function App() {
  return (
    <div>
      <header>
        <Wrapper>
          <Headline>ElectronicX</Headline>
        </Wrapper>
        <nav />
      </header>
      <section><Home /></section>
      <footer />
    </div>
  );
}

export default App;
