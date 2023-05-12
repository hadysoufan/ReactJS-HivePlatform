import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/Home.Screen';
import Hive from './Screens/HiveScreen/Hive.Screen';
import { ThemeProvider } from 'styled-components';
import theme from './components/styled/theme.styled';
import CreatePost from './Screens/CreatePost/CreatePost.Screen';
import PostScreen from './Screens/Post/Post.Screen';
import ProfileScreen from './Screens/Profile/Profile.Screen';

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
