import React from 'react';
import { cardStyle } from './ReusableStyle';
import avatarImage from'../assets/06.jpg';
import styled from 'styled-components';
import {HiOutlineLocationMarker} from 'react-icons/hi';


const Profile = () => {
  return (
    <Section>
        <div className="image">
            <img
              src={avatarImage}
              alt='profile'
            />
        </div>
        <div className="title">
          <h2>Tunde Babs</h2>
          <h5><HiOutlineLocationMarker /> Lagos, Nigeria</h5>
        </div>
        <div className="info">
          <div className="container">
            <h5>Days at work</h5>
            <h3>21</h3>
          </div>
          <div className="container">
            <h5>Rides</h5>
            <h3>432</h3>
          </div>
          <div className="container">
            <h5>Rides</h5>
            <h3>432</h3>
          </div>
          <div className="container">
            <h5>Hours</h5>
            <h3>32</h3>
          </div>
        </div>
    </Section>
  )
}

export default Profile;

const Section = styled.section`
  ${cardStyle}
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  .image{
    max-height: 10rem;
    overflow: hidden;
    border-radius:20rem;
    img{
      height: 10rem;
      width: 10rem;
      object-fit: contain;
      border-radius: 20rem;
      transition: 0.5s ease-in-out;
    }
    &:hover{
      img{
        transform:scale(1.1);
      }
    }
  }
  .title{
    text-align: center;

    h2,h5{
      color: orange;
      font-family: 'Permanent Marker', cursive;
      letter-spacing: 0.3rem;
    }
    h5{
      letter-spacing: 0.1rem;
    }
  }
  .info{
    display: flex;
    gap: 1rem;

    .container{
      text-align: center;
    }
  }


`;