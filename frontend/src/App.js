import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Attendance from "./pages/attendance";
import RecordsContextProvider from "./context/recordsContextProvider";

function App() {
  return (
    <Router>
      <RecordsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/attendance' element={<Attendance />} />
        </Routes>
      </RecordsContextProvider>
    </Router>
  );
}

export default App;
