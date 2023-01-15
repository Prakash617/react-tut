import React, { useEffect, useRef, useState } from 'react'
import UseRef from './UseRef'
import PreviousStateUseRef from './PreviousStateUseRef';





const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
  
    <>
          <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
        <h1>Render Count: {count.current}</h1>
        <hr />
        <UseRef/>

        <hr />
        <PreviousStateUseRef/>

    </>

  )
}

export default Home