import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SelectedWork from './pages/SelectedWork'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/selected-work" element={<SelectedWork />} />
      </Routes>
    </Router>
  )
}

export default App
