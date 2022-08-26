import React from 'react';
import styled from 'styled-components';
import {BiSearch} from 'react-icons/bi'

const Navbar = () => {
  return (
    <Nav>
      <div className="title">
        <h4>Hi gemtunde,</h4>
        <h1>Welcome to <span> My Taxi Dashboard </span></h1>
      </div>
      <div className="search">
        <BiSearch/>
        <input type='text' placeholder='Search' />
      </div>
    </Nav>
  )
}

export default Navbar

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 2rem; 
  //or try this 
  position: fixed;
  background-color: black;
  width: 100%;
  //margin-bottom:120vh;

    .title{
      h1{
        span{
          margin-left: 0.5rem;
          color: orange;
          letter-spacing: 0.2rem;
          font-family: 'Permanent Marker', cursive;
        }
      }
    }
    .search{
      background-color: #555;
      display: flex;
      align-items: center;
      padding: 1rem 8rem 1rem 1rem;
      border-radius: 1rem;
      gap:1rem;
      margin-right: 16rem;

      svg{
        color: orange;  
        cursor: pointer;      
      }
      input{
          background-color: transparent;
          border: none;
          color: orange;
          font-family: 'Permanent Marker', cursive;
          letter-spacing: 0.2rem;
          &::placeholder{
            color: orange;
          }
          &:focus{
            outline: none;
          }
        }
    }
`;