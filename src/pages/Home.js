import NewHeaderImage from "../images/New-Header-Image.jpg";
import ContactImage from "../images/contact.png"
import ContactUsImage from "../images/contact-us.png"
import ButtonCarousel from "../components/ButtonCarousel";
import './Home.css';
import Navbar from '../components/Navbar';
import PaddlingMan from '../videos/paddling-man.mp4';

function Home() {
    return (
      <div className="home-scroll">
        <Navbar />
        <img src={NewHeaderImage} alt="New Header"
          className="new-header-image"/>

        <ButtonCarousel />

        <div className="video-card">
          <div className="video-card-text">
              <text className="video-card-bold-title">로컬 커뮤니티에 가입하고 새로운 경험을 즐겨보세요!</text>
              <text className="video-card-body">씨앗 커뮤니티는 관심사 또는 취미가 같은 이웃이 모여 
                  그룹을 만들고Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua. Ut enim ad minim 
                  veniam, quis nostrud exercitation ullamco laboris 
                  nisi ut aliquip ex ea commodo consequat. Duis 
                  aute irure dolor in reprehenderit in voluptate 
                  velit esse cillum dolore eu fugiat nulla pariatur.</text>
          </div>
          <video className="video-card-video" autoPlay loop muted radius={0}>
            <source src={PaddlingMan} />
          </video>
        </div>

        <div className="contact">
          <div>
            <img src={ContactUsImage} className="contact-us-image"/>
            <button className="contact-button">
              <text className="contact-button-text">
              문의하기
              </text>
            </button>
          </div>
          <img src={ContactImage} className="contact-image"></img>
        </div>

        <footer className="footer" >
          <div className="footer-text">
            <div>
              <text>이용약관 </text>         
              <text> 개인정보처리방침 </text>  
              <text> 문의하기</text>       
           </div>
           <text>
             © Copyright  SSIAT Community 2021 (씨앗 커뮤니티)  
           </text>
          </div>
        </footer>

        
      </div>


    )
}

export default Home;