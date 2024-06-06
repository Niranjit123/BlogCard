import './App.css'
import coverImg from '../assets/images/illustration-article.svg'
import dp from '../assets/images/image-avatar.webp'

function App() {

  return (
    <div className='container'>
      <div className='card'>
         <img src={coverImg} alt="blog photo" className='coverImg'/>
         <button>Learning</button>
         <p>Published 21 Dec 2023</p>
         <h1>HTML & CSS foundations</h1>
         <p>These languages are the backbone of every website, defining structure, content and presentation</p>
         <div className='avatar-and-name'>
           <img src={dp} alt="" className='dp'/>
           <h4>Greg Hooper</h4>
         </div>
      </div>

     
    </div>
  )
}

export default App
