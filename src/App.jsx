import Routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./i18n";

const queryClient = new QueryClient();

const App = () => {
    return (
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <Routes />
            </QueryClientProvider>
        </div>
    );
};

export default App;
