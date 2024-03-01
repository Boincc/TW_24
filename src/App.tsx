import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AccountMenu from "./components/Accountmenu.tsx";
import SimpleBottomNavigation from "./components/Simplebottomnavigation.tsx";
import FixedBottomNavigation from "./components/Bottomnavigation.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <AccountMenu/>
          <FixedBottomNavigation/>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
