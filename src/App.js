import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Main from './components/main/Main';
import Service1 from './components/service/service1/Service1';
import Service1Results from './components/service/service1/Service1Results';
import Service2 from './components/service/service2/Service2';
import List from './components/list/List';
import MyPage from './components/mypage/MyPage';



function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='/main' element={<Main />} />
                <Route exact path='/service1' element={<Service1 />} />
                <Route exact path='/service1/results' element={<Service1Results />} />
                <Route exact path='/service2' element={<Service2 />} />
                <Route exact path='/list' element={<List />} />
                <Route exact path='/mypage' element={<MyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;