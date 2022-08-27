import React from 'react';
import styled from 'styled-components';
import {HiArrowNarrowRight} from 'react-icons/hi'
import avatarImage from'../assets/01.jpg';
import avatarImage2 from'../assets/02.png';
import avatarImage3 from'../assets/03.jpg';
import { cardStyle } from './ReusableStyle';

const Transfers = () => {
  const transactions = [
    {
      image:avatarImage,
      name:'From Mo Salah',
      time:'Today, 16:36',
      amount:'+$56',
    },
    {
      image:avatarImage2,
      name:'To Sadio Mane',
      time:'Yesterday, 22:36',
      amount:'+$96',
    },
    {
      image:avatarImage3,
      name:'From Thiago',
      time:'Today, 11:41',
      amount:'+$106',
    },
  ]
  return (
    <Section>
        <div className="title">
          <h2>Your Transfers</h2>
        </div>
        <div className="transactions">
            {
            transactions.map((transaction)=>{
              return(
                <div className="transaction">
                  <div className="transaction__title">
                    <div className="transaction__title__image">
                      <img 
                        src={transaction.image}
                        alt='transaction'
                      />
                    </div>
                    <div className="transaction__title__details">
                      <h3>{transaction.name}</h3>
                      <h5>{transaction.time}</h5>
                    </div>
                  </div>
                  <div className="transaction__amount">
                    <span>{transaction.amount}</span>
                  </div>
                </div>
              )
            })
            }
        </div>
        <a href='#' className='view'>
          View all <HiArrowNarrowRight />
        </a>
    </Section>
  )
}

export default Transfers

const Section = styled.section`
  ${cardStyle};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .title{
    h2{
      color: orange;
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 0.3rem;
     }
    }
  .transactions{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;

     .transaction{
      display: flex;
      justify-content: space-between;
      align-items: center;
        &__title{
          display: flex;
          gap: 1rem;
          &__image{
            img{
              height: 2rem;
              border-radius: 3rem;
            }
          }
        }
        &__amount{
          background-color:#d7e41e1d;
          padding: 0.2rem 0.5rem;
          width: 4rem;
          border-radius: 1rem;
          text-align: center;
          transition: 0.3s ease-in-out;
          &:hover{
            background-color:orange;

            span{
              color: black;
            }
          }
          span{
            color: orange;
          }
        }
     }
  }
  .view{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: orange;
    margin-top: 1rem;
    font-weight: bold;
    gap: 0.5rem;

    svg{
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover{

      svg{
        transform: translate(0.5rem);}
    }

  }
`;








