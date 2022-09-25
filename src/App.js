import { ToastContainer } from 'react-toastify';
import './App.css';
import ListCard from './components/ListCard/ListCard';
import { QueryClientProvider, QueryClient } from 'react-query';

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App h-screen" data-theme="light" >
      <ListCard></ListCard>
      <ToastContainer />
    </div>
    </QueryClientProvider>
    
  );
}

export default App;
