import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import fetchUsersRandom from '../../../../../api/users/getAll';
import { Link } from 'react-router-dom';

const CirclePhotosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28rem;
  height: 11rem; 
  overflow: hidden;
  margin-bottom: 2rem;
`;

const Photo = styled.img`
  width: 6rem; 
  height: 6rem;
  border-radius: 10%;
  object-fit: contain;
  margin: 5px; 
`;

const Title = styled.h1`
font-size: 2rem;
`

const CirclePhotos = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const token = await getAccessTokenSilently();
        const count = 4; // Number of random users to retrieve

        const randomUsers = await fetchUsersRandom(token, count);
        setUsers(randomUsers);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomUsers();
  }, [getAccessTokenSilently]);

  return (
    <>
    <Title>Recomended People</Title>
    <CirclePhotosContainer>
      {users.map(user => (
        <Link
          key={user._id} 
          to={`/user/visit/${user.username}`}
        >
          <Photo
            src={user.img.secure_url} 
            alt={user.username}
          />
        </Link>
      ))}
    </CirclePhotosContainer>
    </>
  );
};

export default CirclePhotos;