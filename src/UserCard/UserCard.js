import React from 'react';
import './styles.scss';


const UserCard = ({ user }, Suggestion) => {
  console.log(user);
  const hasName = (user) => user.name ? user : throw Error('User doesn´t have name!');
  const likesMovies = (user) => user.favorites.series ? user : throw Error('User doesn´t like series!');
  const addDowntonAbbey = (user) => {
    user.favorites.series = [...user.favorites.series, 'Downton Abbey'];
    return user;
  }
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
    {<Suggestion></Suggestion>}
  </div>
}

const DowntonAbbey = () => <p>Deberías ver Downton Abbey!</p>;

const SuggestionCard = UserCard(?, DowntonAbbey);

export default SuggestionCard