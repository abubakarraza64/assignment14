import logo from './logo.svg';
import './App.css';
import img from "./assest/img1.png";
import hero from "./assest/Hero.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

import { AiOutlineArrowRight } from "react-icons/ai";
import { MdSupportAgent } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import { FaBuilding } from "react-icons/bs";
import img2 from "./assest/img2.jpg";
import icon1 from "./assest/icon1.png";
import icon2 from "./assest/icon2.png";
import icon3 from "./assest/icon3.png";
import icon4 from "./assest/icon4.png";
import icon5 from "./assest/icon5.png";
import icon6 from "./assest/icon6.png";
import img1 from "./assest/illus1.png";
import img21 from "./assest/illus3.png";
import img3 from "./assest/illus2.png";
import img4 from "./assest/illus4.png";
import bgimage from "./assest/bgimage.png";
import card1 from "./assest/card1.png";
import card2 from "./assest/card2.png";
import card3 from "./assest/card3.png";
import card4 from "./assest/card4.png";
import ellips from "./assest/Ellipse 29.png";
import ellips1 from "./assest/Ellipse 30.png";
import fb from "./assest/facebook.png";
import ind from "./assest/in.png";
import twitter from "./assest/twitter.png";






import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>



      <div className="container.fluid">
        <div className="row">

          <div className="col-lg-1">
            <img src={img} style={{ height: '47.5px', width: '38px', marginLeft: '20px', marginLeft: '70px', marginTop: '16px' }} alt="" />
          </div>
          <div className="col-lg-1">
            <p style={{
              width: "114px", height: '35px', fontSize: '30px', fontWeight: 'bold', lineHeight: '35px', fontStyle: 'italic',
              color: '#2947A9', position: 'absolute', marginTop: '22px'
            }}> The Box</p>
          </div>
          <div className="col-lg-4"></div>
          <div className="col-lg-1">
            <p style={{ width: '52px', height: '21px', fontSize: '18px', marginTop: '30px', lineHeight: '21px', position: 'static', color: '#14171F' }}>Home</p>
          </div>
          <div className="col-lg-1">
            <p style={{ width: '81px', height: '21px', fontSize: '18px', marginTop: '30px', lineHeight: '21px', position: 'static', color: '#14171F', textAlign: 'center' }}>About Us</p>
          </div>
          <div className="col-lg-1">
            <p style={{ width: '52px', height: '21px', fontSize: '18px', marginTop: '30px', lineHeight: '21px', position: 'static', color: '#14171F' }}>Projects</p>
          </div>
          <div className="col-lg-1">
            <p style={{ width: '52px', height: '21px', fontSize: '18px', marginTop: '30px', lineHeight: '21px', position: 'static', color: '#14171F' }}>Services</p>
          </div>
          <div className="col-lg-1">
            <p style={{ width: '98px', height: '21px', fontSize: '18px', marginTop: '30px', lineHeight: '21px', position: 'static', color: '#F9995D' }}>Contact Us</p>
          </div>
        </div>
      </div>

      <div>

        <img style={{ width: '1440px', height: '646px' }} src={hero} />
        <div className="container.fluid">
          <div className="row">


            <div className="col-lg-8">
              <p style={{ width: '556px', height: '168px', marginTop: '-339px', fontSize: "72px", fontWeight: "600", lineHeight: '84px', marginLeft: '112px', color: '#292E3D', fontFamily: "serif" }}>Building things is our mission.</p>
            </div>

            <div className="col-lg-4">
              <div style={{ width: "416px", height: '150px', background: "#3559C7", borderRadius: '2px 2px 0px 0px', marginTop: "-190px" }}>
                <p style={{ fontSize: '20px', textAlign: 'center', fontWeight: '700', color: 'white' }}>Feature Project</p>
                <p style={{ fontSize: '24px', textAlign: 'center', fontWeight: '400', color: 'white', marginRight: "20px", marginLeft: '20px' }}>The National University of Architecture</p>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className="container.fluid">
        <div className="row">
          <div className="col-lg-8"></div>
          <div className="col-lg-2">
            <button style={{ width: '208px', height: '40px', position: 'absolute', background: '#292E3D', color: 'white', marginTop: '-40px' }}><AiOutlineArrowLeft />Back</button>
          </div>
          <div className="col-lg-2">
            <button style={{ width: '208px', height: '40px', position: 'absolute', background: '#292E3D', color: 'white', marginLeft: '-22px', marginTop: '-40px' }}> <AiOutlineArrowRight />Next</button>
          </div>

        </div>
      </div>
      <h2 style={{ textAlign: 'center', color: 'black', fontWeight: 'bold', marginTop: "60px", fontStyle: 'italic', marginBottom: "50px" }}>
        Our Reputation</h2>
      <div className="container.fluid">
        <div className="row">
          <div className="col-lg-2"></div>
          <div className="col-lg-3">
            <div style={{ height: '197px', width: '292px', border: '1.4px solid #E0E3EB', boxSizing: 'borderBox', borderRadius: '4px' }}>
              <div style={{ color: 'orange', marginLeft: "23px", marginTop: '23px' }}><MdSupportAgent size={32} /></div>
              <p style={{ width: "128px", height: '23px', marginLeft: "20px", margintop: "18px", textSize: '20px', fontWeight: '700' }}>Best Services
              </p>
              <p style={{ width: "254px", height: '38px', marginLeft: "20px", margintop: "18px", textSize: '16px', fontWeight: '400' }}>Nullam senectus porttitor in eget. Eget rutrum leo interdum.
              </p>

            </div>
          </div>
          <div className="col-lg-3">
            <div style={{ height: '197px', width: '292px', border: '1.4px solid #E0E3EB', boxSizing: 'borderBox', borderRadius: '4px' }}>
              <div style={{ color: 'orange', marginLeft: "23px", marginTop: '23px' }}><MdSupportAgent size={32} /></div>
              <p style={{ width: "128px", height: '23px', marginLeft: "20px", margintop: "18px", textSize: '20px', fontWeight: '700' }}>Best Teams
              </p>
              <p style={{ width: "254px", height: '38px', marginLeft: "20px", margintop: "18px", textSize: '16px', fontWeight: '400' }}>Cursus semper tellus volutpat aliquet lacus.
              </p>

            </div>
          </div>
          <div className="col-lg-3">
            <div style={{ height: '197px', width: '292px', border: '1.4px solid #E0E3EB', boxSizing: 'borderBox', borderRadius: '4px' }}>
              <div style={{ color: 'orange', marginLeft: "23px", marginTop: '23px' }}><MdDesignServices size={32} /></div>
              <p style={{ width: "128px", height: '23px', marginLeft: "20px", margintop: "18px", textSize: '20px', fontWeight: '700' }}>Best Design
              </p>
              <p style={{ width: "254px", height: '38px', marginLeft: "20px", margintop: "18px", textSize: '16px', fontWeight: '400' }}>Ultricies at ipsum nunc, tristique nam lectus.
              </p>

            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '100px' }} className="conainer.fluid">
        <div className="row">
          <div className="col-lg-7">
            <img src={img2} style={{ width: "902px", height: '669px', marginLeft: "114px" }} />

          </div>
          <div className="col-lg-5">
            <div style={{ width: "488px", height: "523px", radius: '2px', background: "#2947A9", marginTop: '73px' }}>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: "white", marginLeft: "40px", }}>About Us</p>
              <p style={{ fontSize: '20px', fontWeight: '400', color: "white", marginLeft: "40px", marginRight: "40px" }}>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. <br></br>  We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
              <button style={{
                width: "219px", height: "53px", marginTop: "73px", marginLeft: '40px', Padding:
                  "16px, 20px, 16px, 20px", postion: 'absolute', border: '2px solid #2947A9', boxSizing: 'border-box', borderRadius: "6px", fontSize: '18px', color: '#2947A9', fontWeight: '600'
              }}>More on Our History</button>
            </div>
          </div>
        </div>




      </div>



      <div style={{ background: '#F6F8F7', height: "878px", position: "absolute", borderRadius: "2px", marginTop: '202px', width: "1440px" }}>
        <p style={{ marginTop: "44px", textAlign: "center", fontWeight: "bold", fontSize: '36px', fontStyle: "oblique" }}>Services </p>
        <div className="container.fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "white", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon1} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "black" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "#2947A9", marginTop: "22px" }}>construction</p>
              </div>

            </div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "#2947A9", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon2} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "white" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "white", marginTop: '22px' }}>Renovation</p>
              </div>

            </div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "white", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon3} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "black" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "#2947A9", marginTop: "22px" }}>constitution</p>
              </div>

            </div>
          </div>
        </div>
        <div className="container.fluid">
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "#2947A9", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon4} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "white" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "white", marginTop: "22px" }}>Repair Services</p>
              </div>

            </div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "white", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon5} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "black" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "#2947A9", marginTop: '22px' }}>Arecheticture</p>
              </div>

            </div>
            <div className="col-lg-3">
              <div style={{ width: "271px", height: "181px", marginTop: '122px', background: "#2947A9", boxShadow: "0px 0px 37px -2px rgba(17, 24, 39, 0.05)" }}>
                <img src={icon6} style={{ width: "31.66px", height: "33.33px", marginLeft: "118.8px", marginTop: "41.33px" }} />

                <div style={{ width: '60px', height: '2px', marginTop: "20px", marginLeft: '105.5px', backgroundColor: "white" }}>

                </div>
                <p style={{ fontSize: '20px', fontWeight: "600", textAlign: 'center', lineHeight: '23px', color: "white", marginTop: "22px" }}>Electric</p>
              </div>

            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1250px" }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-6">

              <div style={{ width: "280px", height: "155px", border: " 1px solid #FFFFFF", boxSizing: "border-box", boxShadow: " 0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)", borderRadius: "4px", marginLeft: "412px" }}>
                <p style={{ marginLeft: '30px', marginTop: '30px', fontSize: "52px", fontWeight: "600" }}>
                  84
                </p>
                <img src={img1} style={{ width: "97px", height: "97px", marginLeft: "190px", marginTop: "-197px" }} />
                <p style={{ fontSize: '24px', lineHeight: "28px", color: 'blue', marginLeft: "30px", marginTop: '-30px' }}>Happy Client</p>
              </div>
              <div style={{ width: "280px", height: "155px", border: " 1px solid #FFFFFF", boxSizing: "border-box", boxShadow: " 0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)", borderRadius: "4px", marginLeft: "112px" }}>
                <p style={{ marginLeft: '30px', marginTop: '30px', fontSize: "52px", fontWeight: "600" }}>
                  123
                </p>
                <img src={img21} style={{ width: "97px", height: "97px", marginLeft: "-50px", marginTop: "-197px" }} />
                <p style={{ fontSize: '24px', lineHeight: "28px", color: 'blue', marginLeft: "30px", marginTop: '-30px' }}>Project Completed</p>
              </div>
              <div style={{ width: "280px", height: "155px", border: " 1px solid #FFFFFF", boxSizing: "border-box", boxShadow: " 0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)", borderRadius: "4px", marginLeft: "358px", marginTop: "20px" }}>
                <p style={{ marginLeft: '30px', marginTop: '30px', fontSize: "52px", fontWeight: "600" }}>
                  37
                </p>
                <img src={img3} style={{ width: "97px", height: "97px", marginLeft: "190px", marginTop: "-197px" }} />
                <p style={{ fontSize: '24px', lineHeight: "28px", color: 'blue', marginLeft: "30px", marginTop: '-30px' }}>Awards Win</p>
              </div>
              <div style={{ width: "280px", height: "155px", border: " 1px solid #FFFFFF", boxSizing: "border-box", boxShadow: " 0px 12px 16px -4px rgba(17, 24, 39, 0.1), 0px 4px 6px -2px rgba(17, 24, 39, 0.05)", borderRadius: "4px", marginLeft: "161px", marginTop: "20px" }}>
                <p style={{ marginLeft: '30px', marginTop: '30px', fontSize: "52px", fontWeight: "600" }}>
                  30
                </p>
                <img src={img4} style={{ width: "97px", height: "97px", marginLeft: "190px", marginTop: "-197px" }} />
                <p style={{ fontSize: '24px', lineHeight: "28px", color: 'blue', marginLeft: "30px", marginTop: '-30px' }}>years in Business</p>
              </div>
              <div className="col-lg-5">



              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "944px", marginTop: "-809px" }}>
        <div style={{ width: "359px", height: '140px' }}>
          <p style={{ marginTop: '172px', fontSize: '60px', fontWeight: 'bold', color: '#2947A9' }}>30 Years Experience</p>

        </div>
        <div>
          <p style={{ width: "330px", height: "74", marginTop: "40px", fontSize: '20px', fontWeight: "400", color: "#525B7A" }}>
            Our company has been the leading provided construction services to clients throughout the USA since 1988.
          </p>
        </div>
        <button style={{ width: '176px', boxSizing: 'border-box', height: '53px', background: "#2947A9", borderRadius: "6px", position: "absolute", textSize: '18px', color: "white", border: "2px solid #2947A9 " }}>
          Contact Us
        </button>
      </div>
      <div style={{ marginTop: '400px', backgroundImage: `url(${bgimage})`, width: "1440px", height: "300px" }}>

        <div className="container.fluid">
          <div className="row">
            <div className="col-lg-7">
              <p style={{ fontWeight: "700", fontSize: "30px", color: "white", marginTop: '100px', marginLeft: "112px" }}>
                Free consultation with exceptional quality

              </p>
              <p style={{ fontSize: "24px", fontWeight: "400", marginLeft: "112px", color: "white" }}>
                Just one call away: +92 321 7805899
              </p>
            </div>
            <div className="col-lg-5">
              <button style={{ position: "absolute", width: "232px", height: "53px", fontSize: "18px", fontWeight: "600", border: "2px solid white", marginTop: "124px", background: "none", boxSizing: "border-box", borderRadius: "4px", color: "white" }}>
                Get your consultation

              </button>
            </div>

          </div>
        </div>
      </div>
      <div style={{ marginTop: "88px" }}>
        <p style={{ fontSize: '36px', fontWeight: '700', color: "#292E3D", marginLeft: "112px" }}>
          Projects

        </p>
        <div className='conainer.fluid'>
          <div className="row">

            <div className="col-lg-2">
              <p style={{ fontSize: "24px", fontWeight: 'bold', color: "#2947A9", marginLeft: "132px" }}>
                All
              </p>
              <p style={{ fontSize: "24px", fontWeight: '500', color: "#C2C7D6", marginLeft: "132px" }}>
                Commercial
              </p>
              <p style={{ fontSize: "24px", fontWeight: '500', color: "#C2C7D6", marginLeft: "132px" }}>
                Residential
              </p>
              <p style={{ fontSize: "24px", fontWeight: '500', color: "#C2C7D6", marginLeft: "132px" }}>
                Other
              </p>
            </div>
            <div className="col-lg-2"></div>
            <div className="col-lg-3">
              <img src={card1} alt="" srcset="" />
              <div style={{ width: "383px", height: '84px', background: "#2947A9" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: "white", paddingTop: "12px", paddingLeft: "12px", marginBottom: '12px', }}>
                  Wildstone Infra Hotel

                </p>
                <p style={{ fontSize: "18px", fontWeight: "normal", color: "white", marginLeft: '12px' }}>
                  2715 Ash Dr. San Jose, South Dakota

                </p>

              </div>


            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <img src={card2} alt="" srcset="" />
              <div style={{ width: "383px", height: '84px', background: "#2947A9" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: "white", paddingTop: "12px", paddingLeft: "12px", marginBottom: '12px', }}>
                  Wish Stone Building

                </p>
                <p style={{ fontSize: "18px", fontWeight: "normal", color: "white", marginLeft: '12px' }}>
                  2972 Westheimer Rd. Santa Ana, Illinois

                </p>

              </div>

            </div>
            <div className="col-lg-1"></div>
          </div>

        </div>
        <div style={{ marginTop: "32px" }} className="container.fluid">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-3">
              <img src={card3} alt="" srcset="" />
              <div style={{ width: "383px", height: '84px', background: "#2947A9" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: "white", paddingTop: "12px", paddingLeft: "12px", marginBottom: '12px', }}>
                  Mr. Parkinston’s House

                </p>
                <p style={{ fontSize: "18px", fontWeight: "normal", color: "white", marginLeft: '12px' }}>
                  3517 W. Gray St. Utica, Pennsylvania

                </p>

              </div>


            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-3">
              <img src={card4} alt="" style={{ width: '384px', height: '247px' }} />
              <div style={{ width: "383px", height: '84px', background: "#2947A9" }}>
                <p style={{ fontSize: "20px", fontWeight: "bold", color: "white", paddingTop: "12px", paddingLeft: "12px", marginBottom: '12px', }}>
                  Oregano Height

                </p>
                <p style={{ fontSize: "18px", fontWeight: "normal", color: "white", marginLeft: '12px' }}>
                  2464 Royal Ln. Mesa, New Jersey

                </p>

              </div>

            </div>



          </div>
        </div>
        <div style={{ marginTop: '64px' }} className="container.fluid">
          <div className="row">


            <div className="col-lg-4"></div>
            <div className="col-lg-3">
              <button style={{ position: 'static', width: "295px", height: '64px', background: "#292E3D", color: "white", }}>
                <AiOutlineArrowLeft size={32} style={{ color: 'white', position: "static" }} />Back
              </button>
            </div>
            <div className="col-lg-2" style={{ marginTop: "24px" }}>
              <img src={ellips} />
              <img src={ellips1} style={{ marginLeft: "20px" }} />
              <img src={ellips1} style={{ marginLeft: "20px" }} />
              <img src={ellips1} style={{ marginLeft: "20px" }} />

            </div>
            <div className="col-lg-3">
              <button style={{ position: 'static', width: "295px", height: '64px', background: "#292E3D", color: "white", marginLeft: "-30px" }}>
                Next <AiOutlineArrowRight size={32} style={{ color: 'white', position: "static" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "160px", background: "#F6F8F7", width: '1440px', height: "632px" }}>
        <p style={{ fontSize: "36px", fontWeight: "700", fontStyle: "italic", textAlign: "center", color: "#292E3D", placeContent: "center" }}>What can us do for you?
        </p>
        <p style={{ fontSize: "20px", fontWeight: "400", fontStyle: "italic", textAlign: "center", width: "539px", height: "46px", color: "#292E3D", marginLeft: "451px" }}>We are ready to work on a project of any complexity, whether it’s commercial or residential.
        </p>

        <div className="container.fluid">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
              <input type="text" style={{ width: '280px', height: "41px", background: 'white', marginTop: '32px', boxSizing: "border-box", border: "1px solid #E0E3EB", borderRadius: "4px", marginLeft: '-50px', padding: "10px 8px" }} placeholder={"Your Name"} />
            </div>
            <div className="col-lg-2">
              <input type="text" style={{ width: '280px', height: "41px", background: 'white', marginTop: '32px', boxSizing: "border-box", border: "1px solid #E0E3EB", borderRadius: "4px", marginLeft: '32px', padding: "10px 8px" }} placeholder={"Email"} />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
        <div className="container.fluid">
          <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-2">
              <input type="text" style={{ width: '280px', height: "41px", background: 'white', marginTop: '32px', boxSizing: "border-box", border: "1px solid #E0E3EB", borderRadius: "4px", marginLeft: '-50px', padding: "10px 8px" }} placeholder={"Reason For Contacting"} />
            </div>
            <div className="col-lg-2">
              <input type="text" style={{ width: '280px', height: "41px", background: 'white', marginTop: '32px', boxSizing: "border-box", border: "1px solid #E0E3EB", borderRadius: "4px", marginLeft: '32px', padding: "10px 8px" }} placeholder={"Phone"} />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>

        <input type="text" style={{ width: '605px', height: "135px", color: "white", border: "1px solid #E0E3EB", boxSizing: 'border-box', borderRadius: "4px", marginLeft: "438px", marginTop: "20px", paddingBottom: '100px', paddingLeft: "12px" }} placeholder={"Message"} />
        <p style={{ marginLeft: '438px', fontSize: '16px', fontWeight: "400", color: "blue" }}>* indicates a required field</p>
        <button style={{ height: "53px", width: '271px', marginLeft: '585px', marginTop: '30px', position: "absolute", background: "#2947A9", borderRadius: "4px", border: "1px #2947A9 ", color: "white", fontSize: "18px", fontWeight: "600", marginBottom: "77px" }}>
          Submit
        </button>
      </div>
      <div className='container.fluid' style={{ height: "420px", width: "1440px" }}>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-1">
            <p style={{ fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic', marginTop: "85px" }}>
              NAME:

            </p>
            <p style={{ fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic', marginTop: "40px", marginBottom: "30px" }}>
              ADDRESS:

            </p>

            <p style={{ fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic', marginTop: "40x", }}>
              PHONE:

            </p>
            <p style={{ fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic', marginTop: "40px" }}>
              E-MAIL:

            </p>


          </div>
          <div className="col-lg-5">
            <p style={{ marginTop: "85px", fontWeight: "400", fontSize: '20px', position: "static", color: " #292E3D", textTransform: "capitalize" }}>
              MUHAMMAD ABUBAKAR RAZA
            </p>
            <p style={{ fontWeight: "400", fontSize: "20px", color: "#292E3D", fontStyle: 'italic', marginTop: "40px", marginBottom: "30px" }}>
              C-BLOCK SIR SYED TOWN FAISALABAD

            </p>

            <p style={{ fontWeight: "400", fontSize: "20px", color: "#292E3D", fontStyle: 'italic', marginTop: "40x", }}>
              +92 321 7805899

            </p>
            <p style={{ fontWeight: "400", fontSize: "20px", color: "#292E3D", fontStyle: 'italic', marginTop: "40px" }}>
              abubakarraza64@gmail.com

            </p>
            
            <img src={img} style={{ height: '47.5px', width: '38px', marginTop: '16px',marginLeft:"-120px" }} alt="" />
            <p style={{
              width: "114px", height: '35px', fontSize: '30px', fontWeight: 'bold', lineHeight: '35px', fontStyle: 'italic',
              color: '#2947A9', position: 'absolute', marginTop:"-40px",marginLeft:'-60px'
            }}> The Box</p>
          </div>
          <div className="col-lg-4">

            <p style={{ marginTop: '85px', fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic' }}>
              NEWS LETTER

            </p>
            <input type="text" placeholder='Your E-mail here' style={{ width: "280px", marginTop: "20px", height: "41px", background: 'white', border: "1px solid #E0E3EB", boxSizing: "borderBox", borderRadius: "4px", paddingLeft: "10px" }} />

            
            <p style={{ marginTop: '42px', fontWeight: "500", fontSize: "20px", color: "#2947A9", fontStyle: 'italic' }}>
              SOCIAL:

            </p>
            <a href="https://www.facebook.com/mabubakar.raza.3" target={"_blank"}  >

              <img src={fb} alt="" />
            </a>
            <a href="https://www.instagram.com/abubakarraza22/" target={"_blank"}>

              <img src={ind} alt="" style={{ marginLeft: "15px" }} />
            </a>
            <a href=""><img src={twitter} alt="" style={{ marginLeft: "15px" }} />
            </a>
          </div>


        </div>

      </div>
      <div style={{width:"1440px",height:"70px",background:'#2947A9'}}>
        <p style={{marginLeft:'112px',fontSize:"16px",fontWeight:"400",color:'white',marginTop:"20px",padding:"20px"}}>
        TheBox Company © 2022. All Rights Reserved

        </p>
      </div>

    </div>

  );
}

export default App;
