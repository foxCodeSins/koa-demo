import React from 'react';
import './App.css';
import Router from '@/router/index'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient({

})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
      </div>
    </QueryClientProvider>
  );
}

export default App;
