import React from 'react';
import UserItem from './UserItem';

function UserList({ users, onRemoveUser }) {
    return (
        <ul>
            {users && users.map((user) => (
                <UserItem key={user.id} 
                		  user={user} onRemoveUser={onRemoveUser} />
            ))}
        </ul>
    );
}

export default UserList;