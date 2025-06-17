import { BrowserRouter as Routes, Route } from "react-router-dom";
import Signup from "./pages/SIgnup";
const App = () => {
  return (
    <Routes>
      App
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};
export default App;
