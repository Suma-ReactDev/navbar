import {useEffect} from 'react'

const Home = () => {
  
  const hoursEl = document.getElementById('hours')
  const minEl = document.getElementById('min')
  const secEl = document.getElementById('sec')
  const ampmEl = document.getElementById('ampm')
  const updateClock =()=>{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = "AM"
    if (h>12){
      h=h-12
      ampm= "PM"
    }
    hoursEl.innerText = h;
    minEl.innerText = m;
    secEl.innerText = s;
    console.log('executed')
}   

    return (
    <div className='flex justify-center items-center min-h-screen'> 
      <button 
      className='m-5 p-5 bg-slate-200'
      >Clock</button>
      <div>
        <div id='hours'>00</div>
        <span>HOURS</span>
      </div>
      <div>
        <div id='min'>00</div>
        <span>MINUTES</span>
      </div>
      <div>
        <div id='sec'>00</div>
        <span>SECONDS</span>
      </div>
      <div>
        <span id='ampm'>AM</span>
      </div>
    </div>
  )
}

export default Home