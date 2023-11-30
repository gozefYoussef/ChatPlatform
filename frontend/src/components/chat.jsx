// Chat.js
const Chat = () => {
  // Sample chat messages
  const messages = [
    { user: 'User 1', text: 'Hello there!' },
    { user: 'User 2', text: 'Hi! How are you?' },
    // Add more messages as needed
  ];

  return (
    <div className="border p-4 h-80 overflow-y-auto">
      {messages.map((message, index) => (
        <div key={index} className="mb-2">
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
};

export default Chat;
