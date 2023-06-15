import logo from './logo.svg';
import './App.css';
import Navbar from './common/Navbar';
import Footer from './common/Footer';
import MainContent from './routes/MainContent';

function App() {
  return (
    <div>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
