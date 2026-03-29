import React, { createContext, useContext, useReducer } from 'react';

// Create a Context for the posts
const PostsContext = createContext();

// Define a reducer to manage the state of posts
const postsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [...state, action.payload];
    case 'REMOVE_POST':
      return state.filter((post, index) => index !== action.payload);
    default:
      return state;
  }
};

// Create a provider component
const PostsProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postsReducer, []);

  return (
    <PostsContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};

// Create a custom hook to use the PostsContext
const usePosts = () => {
  return useContext(PostsContext);
};

const App = () => {
  const { posts, dispatch } = usePosts();

  const addPost = () => {
    dispatch({ type: 'ADD_POST', payload: 'New Post' });
  };

  const removePost = (index) => {
    dispatch({ type: 'REMOVE_POST', payload: index });
  };

  return (
    <div>
      <button onClick={addPost}>Add Post</button>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post} <button onClick={() => removePost(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Root = () => (
  <PostsProvider>
    <App />
  </PostsProvider>
);

export default Root;