import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/Home.Screen';
import Hive from './Screens/HiveScreen/Hive.Screen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} exact />
        <Route path="/hive" element={<Hive />}/>
      </Routes>
    </Router>
  );
}

export default App;
