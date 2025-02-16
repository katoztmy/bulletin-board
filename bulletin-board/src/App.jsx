import './App.css'
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewThread } from './components/thread/NewThread';
import { ThreadList } from './components/thread/ThreadList';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/threads/new" element={<NewThread />} />
      </Routes> 
      </BrowserRouter>
    </>
  )
}

export default App
