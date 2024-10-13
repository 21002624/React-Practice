import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiComponent from './Components/MultiComponent'
import HigherOrderComponent from './Components/HigherOrderComponent'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseContext from './Hooks/UseContext'
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import LiftingTheStateUp from './StateManagement/LiftingTheStateUp'
import CodeSpliting from './CodeSpliting/CodeSpliting'
import { Data } from './Props/PropsType'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <nav>
        <div> 
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/multi-component'>multi-component</Link>
        </div>
        <div>
          <Link to='/use-state'>use-state</Link>
        </div>
        <div>
          <Link to='/use-effect'>use-effect</Link>
        </div>
        <div>
          <Link to='/use-context'>use-context</Link>
        </div>
        <div>
          <Link to='/liftingstateup'>State-up</Link>
        </div>
        <div>
          <Link to='/codespliting'>codes-pliting</Link>
        </div>
        <div>
          <Link to='/propstypes'>props-type</Link>
        </div>
      </nav>

      <Routes>
      <Route path='/' element={<h2>Navigation</h2>} />
        <Route path='/multi-component' element={<MultiComponent />} />
        <Route path='/use-state' element={<UseState />} />
        <Route path='/use-effect' element={<UseEffect />} />
        <Route path='/use-context' element={<UseContext />} />
        <Route path='/liftingstateup' element={<LiftingTheStateUp />} />
        <Route path='/codespliting' element={<CodeSpliting />} />
        <Route path='/propstypes' element={<Data />} />
      </Routes>

    </Router>
    // <>
    //   <MultiComponent />
    //   <UseState />
    //   <UseEffect />
    //   <UseContext />
    // </>
  )
}

export default App
