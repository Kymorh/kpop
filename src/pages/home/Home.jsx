import { NavLink } from "react-router-dom"
import "./home.css"
import { Nav } from "../../components/Nav/Nav"
const Home = () => {
  return (

    <>

      <div className="main">
        <Nav />
        <div className="banner">
          <img className="banl" src="https://i.pinimg.com/736x/9a/e3/23/9ae3233f9520ba5f42f831fc11af32b8.jpg" alt="" />
         <div className="play"> ▶</div>
          <div className="sqears">
             <div className="top-square">

          </div>
          <div className="bot-square">

          </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home