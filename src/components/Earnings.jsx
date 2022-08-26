import React from 'react'
import styled from 'styled-components'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts'
import { cardStyle } from './ReusableStyle';

const data = [
  {data:2000},
  {data:2500},
  {data:2800},
  {data:3300},
  {data:3400},
  {data:4000},
  {data:4500},
  {data:5300},
  {data:5900},
  {data:6200},
  {data:6800},
  {data:7300},
  {data:7900},
  {data:8200},
  {data:8700},
  {data:9100},
  {data:9900},
]


const Earnings = () => {
  return (
    <Section>
        <div className="top">
          <div className="info">
            <h4>This month earnings</h4>
            <h1>$543.02</h1>
            <div className="growth">
              <span>+2.34%</span>
            </div>
          </div>
        </div>
        <div className="chart">
          <ResponsiveContainer height='100%' width='100%'>
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{top:0, left:0,right:0, bottom:0}}
              >
                <Tooltip cursor={false}/>
                <Area
                  animationBegin={800}
                  animationDuration={2000}
                  type='monotone'
                  dataKey='data'
                  stroke='#f4ae0bea'
                  fill='#806423ea'
                  strokeWidth={4}
                />
              </AreaChart>
          </ResponsiveContainer>
        </div>
    </Section>
  )
}

export default Earnings;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 20rem;
  ${cardStyle}
  padding: 2rem 0 0 0;

  .top{
    .info{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap:0.3rem;

      h1{
        font-size: 2rem;
      }
      .growth{
        background-color: #000;
        padding: 0.5rem;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;

        &:hover{
          background-color: orange;
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

   .chart{
     height: 70%;
     .recharts-default-tooltip{
      background-color: black !important;
      border-color: black !important;
     }
   }


`;


