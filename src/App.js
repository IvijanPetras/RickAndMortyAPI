 import Characters from "./Components/Characters";
 import { QueryClientProvider, QueryClient } from 'react-query';
 import './CSS/style.css';

 const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
         <Characters />
      </QueryClientProvider>
     
    </div>
  );
}

export default App;
