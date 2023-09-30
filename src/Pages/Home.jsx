import React from 'react'

function Home() {
  const clickHandler= ()=>{
        alert("clicked");
  }
  const authToken = false;
  return (
    <div>
        <h1 className=' text-center font-sans font-bold'>Start Something epic</h1>
        <button className=' bg-button text-white text-sm px-7 py-3 rounded-3xl focus:outline-none hover:border-none hover:bg-button-r border-none' onClick={clickHandler}>{authToken ? 'Sign out':'Create account'}</button>
    </div>
  )
}

export default Home