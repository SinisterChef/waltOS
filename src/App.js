import { useState } from 'react';
import Modal from './components/Modal';
import Button from './components/Button';
import logo from './walt.webp';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <span style={{ color: '#61DAFB' }}>Walt</span><span style={{ color: 'lime' }}>OS</span>
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Button onClick={handleOpenModal}>
          Learn more
        </Button>
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          header="Ahhhh"
          text="I'm going to barf"
        />
      </header>
    </div>
  );
}

export default App;
