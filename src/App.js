
import logo from './assets/logo.svg';
import bannerGirl from './assets/BannerGirl.svg'
import instagramIcon from './assets/InstagramIcon.svg'
import facebookIcon from './assets/FacebookIcon.svg'
import openSeaIcon from './assets/OpenSeaIcon.svg'
import discordIcon from './assets/DiscordIcon.svg'

function App() {
  return (
    <div className="App">
        <header>
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-3">
                <div className="logo">
                  <a href='#'>
                    <img src={logo} />
                  </a>
                </div>
              </div>

              <div className="col-9 text-end">
                <div className="main_menu">
                  <div className='social_icons'>
                    <a href='#'><img src={instagramIcon} /></a>
                    <a href='#'><img src={facebookIcon} /></a>
                    <a href='#'><img src={discordIcon} /></a>
                    <a href='#'><img src={openSeaIcon} /></a>
                  </div>
                  <button className='btn btn-primary'>JOIN OUR DISCORD</button>
                </div>
              </div>
            </div>
          </div>
        </header>


       <div className='main_banner'>
         
        
      
        <div className='container'>
            <div className='row'>
              <div className='col-md-7'>
                
              </div>
              <div className='col-md-5'>
                <h1 className='cm_title'>
                  <span className='heading_1'>Welcome</span>
                  <span className='heading_2'>to the</span>
                  <span className='heading_3'>Club</span>
                </h1>

                <p className='ps-5 mt-4'><b>A UNIQUE NFT.</b> JUST FOR YOU.</p>

                <div className='center_mobile'>
                <p><b>
                Lorem ipsum dolor sit amet, consectetur<br />
                adipiscing elit. In dictum, nunc et ultrices <br />
                pellentesque, erat metus gravida enim, <br />
                ac cursus dui risus vel massa.
                </b></p>

                <h1 className='numbers'>3000/3000</h1>


                <div className='cm_counts_wrap'>
                <button className='btn btn-primary rounded-4 px-4'>CONNECT YOUR WALLET</button>
                <div className='cm_counts'>
                    <button className='btn btn-primary'>-</button>
                    <span>1</span>
                    <button className='btn btn-primary'>+</button>
                </div>
                </div>
                </div>
              
              </div>
            </div>
          </div>


          <img src={bannerGirl} className="banner_img" />


       </div>
    </div>
  );
}

export default App;
