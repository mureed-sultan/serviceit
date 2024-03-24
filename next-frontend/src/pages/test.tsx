import Loading from '@/component/loading';
import React, { useState } from 'react';

function Test() {
  const [loaded, setLoaded] = useState(false); 

setTimeout(() => {
    setLoaded(true)
}, 5000);

  return (
    <div>
      <Loading loaded={loaded}/>
    </div>
  );
}

export default Test;
