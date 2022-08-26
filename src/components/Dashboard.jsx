import React from 'react';
import styled from 'styled-components';

import Navbar from './Navbar';
import Analytics from './Analytics';
import FAQ from './FAQ';
import Earnings from './Earnings';
import Transfers from './Transfers';
import Profile from './Profile'

const Dashboard = () => {
  return (
    <Section>
      <div className="navbar">
      <Navbar />
      </div>
      <div className="grid">
        <div className="row__one">
          <Analytics />
          <FAQ />
        </div>
        <div className="row__two">
          <Earnings />
          <Transfers />
          <Profile />
        </div>
      </div>
      </Section>
  )
}

export default Dashboard

const Section = styled.section`
  margin-left: 18vw;
  height: 100%;
  .navbar{
    width: 100%;
    border-bottom: 0.1rem solid #555;    
   // position: fixed;
  }
  .grid{
    display: flex;
    flex-direction: column;
    height: 100%;
    gap:1rem;
    margin-top: 2rem;
    padding: 2rem;

    .row__one{
      display: grid;
      grid-template-columns:repeat(2, 1fr);
      height: 50%;
      gap: 1rem;
    }
    .row__two{
      display: grid;
      grid-template-columns:repeat(3, 1fr);
      height: 50%;
      gap: 1rem;
    }
  }
`;


