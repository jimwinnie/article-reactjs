import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Article } from './composants/Article';
function App() {
  return (<>
      <div className="container">
          <Article></Article>
      </div>
  </>
  );
}

export default App;
