import { useState, useEffect } from "react";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { fetchedData } from './redux/action'
import { useDispatch } from 'react-redux'

function App() {
  const [hideForm, setHideForm] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchedData())
  }, [])
    
  return (
    <div className="container">
      <Header onToggle={() => setHideForm(!hideForm)}/>
      {hideForm && <Form />}
      <Tasks />
    </div>
  );
}

export default App;
