```javascript
// pages/about.js

export default function About() {
  let data = null;
  try {
    data = require('./data.json');
  } catch (error) {
    console.error('Error loading data.json:', error);
    // Handle the error appropriately, e.g., display a default message.
    data = { message: 'Data not found' };
  }

  return (
    <div>
      <h1>About Page</h1>
      <p>{data.message}</p>
    </div>
  );
}
```