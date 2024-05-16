import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./Pages/Home"
import WaitList from "./Pages/WaitList"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="waitlist" element={<WaitList/>} />
        </Route>
    </Routes>
    </>
  )
}

export default App