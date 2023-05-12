import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HomeScreen from './Screens/HomeScreen/Home.Screen';
import Hive from './Screens/HiveScreen/Hive.Screen';
import CreatePost from './Screens/CreatePost/CreatePost.Screen';
import PostScreen from './Screens/Post/Post.Screen';
import ProfileScreen from './Screens/Profile/Profile.Screen';

import theme from './components/styled/theme.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/hive" element={<Hive />} />
          <Route path="/hive/post/:id" element={<PostScreen />} />
          <Route path="/hive/user-profile" element={<ProfileScreen />} />
          <Route path="/create-post" element={<CreatePost />} exact />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
