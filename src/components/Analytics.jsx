import React from 'react';
import {cardStyle} from './ReusableStyle';
import styled from 'styled-components';

import {BsFillCalendar2WeekFill} from 'react-icons/bs';
import {IoStatsChart} from 'react-icons/io5';
import {BiGroup} from 'react-icons/bi';
import {FiActivity} from 'react-icons/fi';

const Analytics = () => {
  return (
    <Section>
      <div className="analytic">
        <div className="content">
          <h5>Spent this month</h5>
          <h2>$345.32</h2>
        </div>
        <div className="logo">
          <BsFillCalendar2WeekFill />
        </div>
        </div>     
        <div className="analytic">
           <div className="logo">
            <IoStatsChart />
          </div>
          <div className="content">
            <h5>Earnings</h5>
          <h2>$145.32</h2>
          </div>         
        </div>
        <div className="analytic">
           <div className="logo">
            <BiGroup />
          </div>
          <div className="content">
            <h5>New Client</h5>
          <h2>452</h2>
          </div>         
        </div>
        <div className="analytic">
           <div className="logo">
            <FiActivity />
          </div>
          <div className="content">
            <h5>Activity</h5>
          <h2>$845.32</h2>
          </div>         
        </div>      
    </Section>
  )
};

export default Analytics;

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  .analytic{
    ${cardStyle};
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 1rem;
    transition: 0.5s ease-in-out;

    &:hover{
      color: black;
      background-color: orange;

      svg{
        color: white;
      }
    }
    .logo{
      background-color:black;
      border-radius: 3rem;
      display: flex;
      justify-content: center;
      align-items:center;
      padding: 1.5rem;

      svg{
        font-size: 1.5rem;
      }
    }

  }

  @media screen and (min-width: 280px) and (max-width:1080px) {
  
  //grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
   grid-template-columns:1fr;
    .analytic{
      &:nth-of-type(3),
      &:nth-of-type(4){
        flex-direction: row-reverse;
      }
    }
  }
`;