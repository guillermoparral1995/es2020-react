import React from 'react';
import './styles.scss';

const UserCard = ({ user }) => <div className='user-card'>
  <p>{`${user.name} ${user.surname}`}</p>
</div>

export default UserCard