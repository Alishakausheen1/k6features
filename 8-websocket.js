import ws from 'k6/ws';
import { check } from 'k6';

export default function () {
  const url = 'wss://echo.websocket.org';  // Updated to use 'wss' (secure WebSocket)
  const params = { tags: { my_tag: 'hello' } };

  // Connect to WebSocket server
  ws.connect(url, params, function (socket) {
    // Ensure WebSocket is opened
    socket.on('open', () => {
      console.log('Connected to WebSocket server');
      socket.send('Hello, WebSocket!');  // Optionally send a message to server
    });

    // Listen for incoming messages
    socket.on('message', (data) => {
      console.log('Message received: ', data);
      
      // Check if the response matches the sent message
      check(data, {
        'response matches request': (d) => d === 'Hello, WebSocket!',
      });

      // Close the WebSocket connection after receiving a response
      socket.close();
    });

    // Handle WebSocket closure
    socket.on('close', () => console.log('Disconnected from WebSocket server'));
  });
}
