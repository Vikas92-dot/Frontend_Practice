import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersAsync, addUser, removeUser } from './redux-config/userSlice';
import UserList from './Components/userList';

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    dispatch(fetchUsersAsync());
  }, [dispatch]);

  const handleAddUser = () => {
    dispatch(addUser({ id: users.length + 1, name: newUserName }));
    setNewUserName('');
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };
  const handleReload =()=>{
    dispatch(fetchUsersAsync());
  }

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <input
        type="text"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
        placeholder="Enter new user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleReload}>Reload</button>
      <UserList users={users} onRemoveUser={handleRemoveUser} />
    </div>
  );
}

export default App;