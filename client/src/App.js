import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/posts');
      const fetched = await response.json();
      const fetchedPosts = fetched.data;
      setPosts(fetchedPosts);
    };
    fetchPosts();
  }, []);
  const [posts, setPosts] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>docker compose workflow test</p>
        <a
          className="App-link"
          href="https://chunhongweb.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <ul>
          {posts &&
            posts.map(post => (
              <li key={post._id}>
                {post.title} - {post.author}
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
