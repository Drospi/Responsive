import './App.css'
import {Design} from './components/Design'
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {Team} from './components/Team'
import {Principal} from './components/Principal'
import {Services} from './components/Services'
function App() {

  return (
    <>
    <body>
    <Nav></Nav>
    <Principal></Principal>
    <h2>We offer high <br />demand services</h2>
    <div className='services'>
    <Services icon='edit' title='UI/UX Design' color='blue'></Services>
    <Services icon='widgets' title='Front End' color='red'></Services>
    <Services icon='lists' title='Back End' color='green'></Services>
    </div>
    <Design></Design>
    <Team></Team>
    <h2>Fast and outstanding results Edie understands <br />their customers needs. They have a young and <br />talented team.</h2>
    <div className='testimony'>
      <img src="../public/img/p4.jpg" alt="" />
      <div>
        <p>Carla Tran</p>
        <p>The Decorate Gatsby</p>
      </div>
    </div>
    <Footer></Footer>
    </body>

    </>
  )
}

export default App
