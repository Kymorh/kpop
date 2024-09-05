import "./About.css"
import { Header } from "../../components/Header/Header";

const About = () => {
  return (
    <div><Header disc="About the group" photo="https://www.lilithia.net/wp-content/uploads/2023/02/straykidsmelbournenightone2023.jpg" />
      <div className="meet">
        meet the team
      </div>
      <div className="footer"> <span>MEET THE TEAM</span>
        <div className="fcards">
<div className="icon">
  <img src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="" />
  <span>Profile Name</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla laborum nam maiores? </p>
</div>
<div className="icon">
<img src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="" />
  <span>Profile Name</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla laborum nam maiores?</p>
</div>
<div className="icon" ><img src="https://cdn-icons-png.flaticon.com/512/4645/4645949.png" alt="" />
  <span>Profile Name</span>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio praesentium nulla laborum nam maiores? </p></div>
        </div>
      </div>

    </div>
  )
}

export default About