import { useEffect, useState } from "react";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import { data } from "./data";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // A function that increment 👆🏻 the previous state like here 
  // is better than directly setting `setValue(value + 1)`
}

function App({store}) {
  const { search } = store.getState()
  const forceUpdate = useForceUpdate();
  useEffect(() => {
    store.subscribe(() => {
      forceUpdate()
    })

  }, [])
 
  return (
    <div className="App">
      <Navbar dispatch={store.dispatch} result={search.searchResult}/>
      <Home store={store}/>
    </div>
  );
}

export default App;
