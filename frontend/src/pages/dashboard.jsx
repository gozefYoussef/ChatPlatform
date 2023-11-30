import Sidebar from '../components/sidebar';
import Chatarea from '../components/chatarea';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Chatarea />
    </div>
  );
};

export default Dashboard;