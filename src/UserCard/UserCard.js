import React from 'react';
import './styles.scss';


const UserCard = ({ user }, suggestion) => {

  const hasName = (user) => user.name ? user : throw Error('User doesn´t have name!');
  const likesMovies = (user) => user.favorites.movies ? user : throw Error('User doesn´t like movies!');
  const addDowntonAbbey = (user) => user.favorites.movies = [...user.favorites.movies, 'Downton Abbey'];
  const sayGoodbye = (user) => {
    console.log(`Goodbye! ${user.name}`);
    return user;
  }

  const validatedUser = user
    |> hasName
    |> likesMovies
    |> addDowntonAbbey
    |> sayGoodbye

  return <div className='user-card'>
    <p>{`${user.name} ${user.surname}`}</p>
  </div>
}

export default UserCard