import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainRouter from "./router/MainRouter";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainRouter />
    </QueryClientProvider>
  );
};

export default App;
