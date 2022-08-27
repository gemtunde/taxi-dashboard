import React from 'react';
import { cardStyle } from './ReusableStyle';
import styled from 'styled-components';

import {IoIosArrowForward} from 'react-icons/io';
import {AiFillCalendar} from 'react-icons/ai';
import {MdTimelapse} from 'react-icons/md';
import {IoMdCash} from 'react-icons/io'


const FAQ = () => {
  const faqs = [
    {
      id:1,
      icon:<AiFillCalendar />,
      text:'How to manage time and get good marks for trips',
    },
    {
      id:2,
      icon:<MdTimelapse />,
      text:'How to regulate transaction over time',
    },
    {
      id:3,
      icon:<IoMdCash />,
      text:'How to withdraw cash from ATM',
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Information for drivers</h2>
      </div>
      <div className="faqs">
        {
          faqs.map((faq)=>{
            return(
              <div className="faq" key={faq.id}>
                <div className="info">
                  {faq.icon}
                  <h4>{faq.text}</h4>
                </div>
                <IoIosArrowForward />
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

export default FAQ

const Section = styled.section`
  ${cardStyle}
  
  .title{
    h2{
      color: orange;
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 0.2rem;
    }
  }
  .faqs{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

    .faq{
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .info{
        display: flex;
        gap: 1rem;
        align-items: center;
      }
      svg{
        font-size: 1.4rem;
      }
      &:nth-of-type(2){
        border-top: 0.01rem solid #6c6e6e;
        border-bottom: 0.01rem solid #6c6e6e;
        padding: 0.8rem 0;
      }
    }
  }
`;