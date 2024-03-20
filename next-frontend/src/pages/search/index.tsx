import React from 'react'
import { useRouter } from 'next/router';


function Search() {
    const router = useRouter();
  const { slug } = router.query;
  console.log(slug)
  
  return (
    <div>
      
    </div>
  )
}

export default Search
