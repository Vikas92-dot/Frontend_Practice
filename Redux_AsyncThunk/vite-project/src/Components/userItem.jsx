import React from 'react';

function UserItem({ user, onRemoveUser }) {
    return (
        <li>
            {user.name} <button onClick={
            	() => onRemoveUser(user.id)}>Delete</button>
        </li>
    );
}

export default UserItem;