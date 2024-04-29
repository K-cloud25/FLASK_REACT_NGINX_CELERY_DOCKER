import React, { useState } from 'react'
import AppContext from './AppContext';
const AppStates = (props) => {

  const [ authToken, setAuthToken ] = useState();

  return (
    <AppContext.Provider value={{authToken, setAuthToken}} >
        { props.children }
    </AppContext.Provider>
  )
}

export default AppStates