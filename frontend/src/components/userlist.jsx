// UserList.js
const UserList = () => {
  // Sample user data
  const users = ['User 1', 'User 2', 'User 3'];

  return (
    <div>
      <h2 className="text-lg font-bold mb-2">Online Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index} className="mb-2">
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
