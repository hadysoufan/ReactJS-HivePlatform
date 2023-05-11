import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/Home.Screen';
import Hive from './Screens/HiveScreen/Hive.Screen';
import { ThemeProvider } from 'styled-components';
import theme from './components/styled/theme.styled';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/hive" element={<Hive />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
