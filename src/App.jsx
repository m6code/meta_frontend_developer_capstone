import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage.jsx';
import Reservations from './pages/Reservations.jsx';

function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/reservations' element={<Reservations />} />
            </Routes>
        </>
    );
}

export default App;
