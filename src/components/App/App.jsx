import './App.css';
import Layout from '../Layout/Layout';
import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
      <Layout>
        <Suspense fallback={<div>Please wait, page is making</div>}>
          <Routes>
            <Route path="/" element={<div>Home</div>}/>
            <Route path="/about" element={<div>About</div>}/>
            <Route path="/price" element={<div>Price</div>}/>
            <Route path="/video" element={<div>Video</div>}/>
            <Route path="/gallery" element={<div>Gallery</div>}/>
            <Route path="/contacts" element={<div>Contacts</div>}/>
          </Routes>
        </Suspense>
      </Layout>
  )
}

export default App
