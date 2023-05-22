import React from 'react';
import './App.css';
import {Home} from './container'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Description } from './components';

function App() {  
  const queryClient = new QueryClient()
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Router>
        <Routes>
        <Route path = '/' element = {<Home/>} />
        <Route path = '/anime/:title' element = {<Description/>} />
      </Routes>
      </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
