import React,{useState, useEffect} from 'react';
import styled from 'styled-components';

import {MdSpaceDashboard} from 'react-icons/md';
import {RiDashboard2Fill} from 'react-icons/ri';
import {FaAddressCard, FaTaxi} from 'react-icons/fa';
import {GiTwirlCenter} from 'react-icons/gi';
import {BsFillChatTextFill} from 'react-icons/bs';
import {IoSettings} from 'react-icons/io5';
import {FiLogOut} from 'react-icons/fi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {VscChromeClose} from 'react-icons/vsc';


const Sidebar = () => {
  const [currentLink, setCurrentLink] = useState(1);
  const [isNavbarState, isSetNavbarState] = useState(false);
  const html = document.querySelector('html');
  html.addEventListener('click', ()=>isSetNavbarState(false));

  return (
    <>
    <Section>
      <div className="top">
        <div className="brand">
          <FaTaxi />
          <span>Ryder</span>
        </div>
        <div className="toggle">
          {
            isNavbarState ? (
              <VscChromeClose
                onClick={()=> isSetNavbarState(false)}
              />
            ) : (
              <GiHamburgerMenu
                onClick={(e)=>{
                  e.stopPropagation();
                  isSetNavbarState(true);
                }}
              />
            )
          }
        </div>
        <div className="links">
          <ul>
            <li 
            onClick={()=>setCurrentLink(1)}
             className={currentLink === 1 ? 'active' : ''}>
              <a href='#'> 
               <MdSpaceDashboard />
               <span> Dashboard</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(2)}
             className={currentLink === 2 ? 'active' : ''}>
              <a href='#'> 
               <RiDashboard2Fill />
               <span> Riders</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(3)} 
            className={currentLink === 3 ? 'active' : ''}>
              <a href='#'> 
               <FaAddressCard />
               <span> Payment Details</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(4)} 
            className={currentLink === 4 ? 'active' : ''}>
              <a href='#'> 
               <GiTwirlCenter />
               <span> Learning Center</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(5)} 
            className={currentLink === 5 ? 'active' : ''}>
              <a href='#'> 
               <BsFillChatTextFill />
               <span> FAQs</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(6)}
             className={currentLink === 6 ? 'active' : ''}>
              <a href='#'> 
               <IoSettings />
               <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="logout">
        <a href='#'>
          <FiLogOut />
          <span>Logout</span>
        </a>
      </div>
    </Section>
    <ResponsiveNav
     state={isNavbarState} 
    className={isNavbarState ? 'show' : ''}
    >
      <div className="responsive__links">
            <ul>
            <li 
            onClick={()=>setCurrentLink(1)}
             className={currentLink === 1 ? 'active' : ''}>
              <a href='#'> 
               <MdSpaceDashboard />
               <span> Dashboard</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(2)}
             className={currentLink === 2 ? 'active' : ''}>
              <a href='#'> 
               <RiDashboard2Fill />
               <span> Riders</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(3)} 
            className={currentLink === 3 ? 'active' : ''}>
              <a href='#'> 
               <FaAddressCard />
               <span> Payment Details</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(4)} 
            className={currentLink === 4 ? 'active' : ''}>
              <a href='#'> 
               <GiTwirlCenter />
               <span> Learning Center</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(5)} 
            className={currentLink === 5 ? 'active' : ''}>
              <a href='#'> 
               <BsFillChatTextFill />
               <span> FAQs</span>
              </a>
            </li>
            <li 
            onClick={()=>setCurrentLink(6)}
             className={currentLink === 6 ? 'active' : ''}>
              <a href='#'> 
               <IoSettings />
               <span> Settings</span>
              </a>
            </li>
          </ul>
      </div>
    </ResponsiveNav>
    </>
  )
}

export default Sidebar

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #555;
  height: 100vh;
  width: 18vw;
  padding: 2rem 0;
  gap: 2rem;
  position: fixed;
  left: 0;

  .top{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;

    .toggle{
        display: none;
    }
    .brand{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      svg{
        color: orange;
        font-size: 2rem;
      }
      span{
        font-size: 2rem;
        color: orange;
        font-family: 'Permanent Marker', cursive;

      }
    }
    .links{
      display: flex;
      align-items: center;
      justify-content: center;

      ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
     
        li{
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

          a{
            text-decoration: none;
            display: flex;
            color: white;
            gap: 1rem;
          }
          
          &:hover{
            background-color: orange;
              a {
              color: black;
              } 
           }          
          }
        .active{
            background-color: orange;
              a{
                color: black;
              }
          }

      }
    }
  }

  .logout{
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    width:70%;

    &:hover{
      background-color: #da0037;
    }
    a{
      text-decoration: none;
      display: flex;
      align-items:center ;
      justify-content: flex-start;
      color: white;
      
      svg{
        margin-right: 10px;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width:1080px) {
    position: initial ;
    width: 100%;
    height: max-content;
    padding: 1rem;

    .top{
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0 1rem;

      .toggle{
        display: block;
        color: white;
        z-index: 10;

        svg{
          font-size: 1.4rem;
        }
      }
      .brand{
        gap: 1rem;
        justify-content: flex-start;        
      }
    }
    .top >.links,
    .logout{
      display: none;
    }

  }
`;

const ResponsiveNav = styled.nav`
  position: fixed;
  right: -10vh;
  top: 0;
  z-index: 20;
  background-color: black;
  height: 100vh;
  width: ${(state)=>(state ? '60%' : '0%')};
  transition: 0.4s ease-in-out;
  opacity: 0;
  visibility: hidden;
  padding: 1rem;

  .responsive__links{
            ul{
        list-style-type: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
     
        li{
          padding: 0.6rem 1rem;
          border-radius: 0.6rem;

           &:hover{
            background-color: orange;
              a {
              color: black;
              } 
           } 

          a{
            text-decoration: none;
            display: flex;
            color: white;
            gap: 1rem;
          }          
                  
          }
        .active{
            background-color: orange;
              a{
                color: black;
              }
          }

      }
  }

`;




















