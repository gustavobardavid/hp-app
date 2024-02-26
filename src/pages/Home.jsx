import '../App.css'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile';

function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <hr />
    <Profile />
      <hr />
    <Hero/>
    </>
  )
}

export default Home
