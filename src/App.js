import React, {useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux"
import {getAutoData} from "./store/actions/getData"

import Form from './Form'

const App = () => {

  const dispatch = useDispatch();
  const {usersData} = useSelector((state) => state.getD);

  useEffect(() => {
    dispatch(getAutoData()) 
  }, [])

  return (
    <div className="App">
      {usersData?<Form usersNames={usersData}/>:"Loading...!!!"}
    </div>
  );
}

export default App;
