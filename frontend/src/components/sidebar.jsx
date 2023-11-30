// Sidebar.js
import UserList from './userlist';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-gray-200 p-4">
      <h1 className="text-xl font-bold mb-4">Chat App</h1>
      <UserList />
    </div>
  );
};

export default Sidebar;
