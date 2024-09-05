import "./Members.css"
import { SingerCard } from "../../components/SingerCard/SingerCard"
import { Header } from "../../components/Header/Header"
const Members = () => {
    return (
        <div >
            <Header under="men from korea" text="STRAY KIDS EVERYWHERE ALL AROUND THE WORLD" disc="STRAY KIDS in the best with eight members" photo="https://i.pinimg.com/originals/7f/60/77/7f6077d0662426bcc8ebfadd58af83d6.jpg" />
            <div className="list">
                <SingerCard position="left" name="Han Jisung" photo="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2021/02/03/f6184056-65d5-11eb-bc00-908c10a5850a_image_hires_164632.jpg?itok=ecGueqKA&v=1612341999" />
                <SingerCard position="right" name="Lee Felix" photo="https://0.soompi.io/wp-content/uploads/2022/01/20104023/Felix-2.jpeg" />
                <SingerCard position="left" name="Jan Jeoning" photo="https://qph.cf2.quoracdn.net/main-qimg-5159915daa72de7b461eccc9f7d40f68" />

            </div>
        </div>


    )
}

export default Members