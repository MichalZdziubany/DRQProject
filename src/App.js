import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navigationbar';
import GetBooks from './components/getBooks';
import AddBook from './components/addBook';
import EditBook from './components/editBook';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/getBooks" element={<GetBooks />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path='/edit/:id' element={<EditBook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
