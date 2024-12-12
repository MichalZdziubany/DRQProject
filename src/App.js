import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navigationbar';
import GetBooks from './components/getBooks';
import AddBook from './components/addBook';
import EditBook from './components/editBook';
import Main from './components/mainPage';
import Footer from './components/footer';

function App() {
  return (
    <div style={{ backgroundColor: '#cdd1d4', minHeight: '100vh' }}>
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/getBooks" element={<GetBooks />} />
        <Route path="/addBook" element={<AddBook />} />
        <Route path='/edit/:id' element={<EditBook />} />
      </Routes>
      <Footer></Footer>
    </Router> 
    </div>
  );
}

export default App;
