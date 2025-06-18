import { useState } from 'react';

export default function UserComponent() {
  const [userId, setUserId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  // Function to fetch user details (GET request)
  const fetchUserDetails = async () => {
    try {
      const response = await fetch(`/api/user/${userId}`);
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Failed to fetch user details.');
    }
  };

  // Function to delete user (DELETE request)
  const deleteUser = async () => {
    try {
      const response = await fetch(`/api/user/${userId}`, 
                                    { method: 'DELETE' });
      const data = await response.json();
      setResponseMessage(data.message);
    } 
    catch (error) {
      setResponseMessage('Failed to delete user.');
    }
  };

  return (
    <div>
        <h1>User API Interaction</h1>

        <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
        />
        <button onClick={fetchUserDetails}>
            Fetch User Details
        </button>
        <button onClick={deleteUser}>
            Delete User
        </button>

        {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}