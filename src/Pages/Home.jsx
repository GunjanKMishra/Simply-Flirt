import React from 'react'

function Home() {
    const authToken = true;
  return (
    <div>
        <h1 className=' text-center'>Start Something epic</h1>
        <button className=''>{authToken ? 'Sign out':'Create account'}</button>
    </div>
  )
}

export default Home