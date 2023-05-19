import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import fetchUsersRandom from '../../../../../api/users/getAll';
import { Link } from 'react-router-dom';

const CirclePhotosContainer = styled.div`
overflow: hidden;
    overflow-x: scroll;
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    white-space: nowrap;
    width: 100%;
    background-color: transparent;
    margin: 1% auto;
`;

const Photo = styled.img`
  width: 6rem; 
  height: 6rem;
  border-radius: 50px;
  object-fit: cover;
  margin: 5px; 
`;

const Title = styled.h1`
font-size: 2rem;
`

const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SpanUsername = styled.span`
  text-align: center;
`

const CirclePhotos = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      const token = await getAccessTokenSilently();
      const count = 4;

      const randomUsers = await fetchUsersRandom(token, count);
      setUsers(randomUsers);
    };

    fetchRandomUsers();
  });

  return (
    <div>
      <h2>Recomended People</h2>
      <CirclePhotosContainer>
        {users.map(user => (
          <div>
            <Link
              key={user._id}
              to={`/user/visit/${user.username}`}
            >
              <UserInfoContainer>
                <Photo
                  src={user.img.secure_url}
                  alt={user.username}
                />
                <SpanUsername>
                  {user.username}
                </SpanUsername>
              </UserInfoContainer>
            </Link>
          </div>
        ))}
      </CirclePhotosContainer>
    </div>
  );
};

export default CirclePhotos;