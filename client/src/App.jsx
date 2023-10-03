import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost } from './page';
import { mylogo } from './assets';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 border-b border-b-[#e6ebf4]">
    <div className='flex items-center'>
      <Link to="/" className='justify-self-start'>
        <img src={logo} alt="logo" className="w-32 object-contain" />
      </Link>
      <span className="font-inter font-medium text-[hsl(14,58%,65%)] cursor-default">by</span>
      <img src={mylogo} alt="mylogo" className='w-24 object-contain'/>
      </div>
      <Link to="/create-post" className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
      
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#dfe3f1] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
