import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route} from 'react-router-dom';
import ContactPage from'./pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import './App.css';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import AboutPage from './pages/AboutPage';
import { fetchCampsites } from './features/campsites/campsitesSlice';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
    }, [dispatch]);
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='contact' element={<ContactPage />}/>
                <Route path='directory' element={<CampsitesDirectoryPage />}/>
                <Route path='about' element={<AboutPage />}/>
                {/* <Route path='directory/0' element={<CampsiteDetailPage campsiteId='0'/>}/>
                <Route path='directory/1' element={<CampsiteDetailPage campsiteId='1'/>}/>
                <Route path='directory/2' element={<CampsiteDetailPage campsiteId='2'/>}/>
                <Route path='directory/3' element={<CampsiteDetailPage campsiteId='3'/>}/> */}
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage/>}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
