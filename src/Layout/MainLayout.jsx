import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar/>
      <div className='max-w-screen-xl mx-auto'>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout
