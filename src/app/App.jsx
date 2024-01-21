import { Providers } from './providers';
import { RoutesProvider } from './providers/routes-provider';

function App() {

  return (
    <>
      <Providers>
        <RoutesProvider/>
      </Providers>
    </>
  );
}

export default App
