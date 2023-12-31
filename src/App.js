import './App.css';

import CreateTable from './components/CreateTabele';

const data = {
  "りんご":{"個数":3, "価格":200},
  "みかん":{"個数":10, "価格":100},
  "バナナ":{"個数":5, "価格":150},
  "ぶどう":{"個数":2, "価格":400},
  "メロン":{"個数":3, "価格":1000}
  }

function App() {

  const fruitNames = Object.keys(data)

  return (
    
    <div className="App">
      <div>
        <CreateTable data={data}/>
      </div>
    </div>
  );
}

export default App;
