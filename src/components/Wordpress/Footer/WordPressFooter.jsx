import NSF_Sponsor from "../../../common/images/NSF-Sponsor.png";
import Intel_Sponsor from "../../../common/images/Intel-Sponsor.png";
import IBM_Sponsor from "../../../common/images/IBM-Sponsor.png";
import NVIDIA_Sponsor from "../../../common/images/NVIDIA-Sponsor.png";

import LinkedIn_Logo from "../../../common/images/InBug-White.png";

import {NavData} from "../NavData";
export default function WordPressFooter() {


    return(
        <div className="wp-footer-container">

            <footer className="wp-footer">

                <div className="wp-footer-info-container">

                    <img className="wp-logo-footer" src="https://dev.cdercenter.org/wp-content/uploads/2025/10/CDER-Logo.png" alt="CDER Logo"/>
                    <p style={{letterSpacing: 1}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum cursus elit ac varius.
                    Pellentesque feugiat sem ut elit laoreet, nec molestie ipsum vulputate. Sed id diam et arcu ultricies feugiat.
                    </p>
                    <img src={LinkedIn_Logo} alt="LinkedIn Logo" style={{height: 18,width: 18}}/>

                    <p style={{fontSize: 14, marginLeft: 18, marginTop: 32}}>© CDER 2025</p>

                </div>

                <div className="wp-footer-nav-container">

                    {
                        NavData.map((item) => (
                            <div className="wp-footer-nav-item" key={item.id}>
                                <p>{item.title}</p>
                                <ul>
                                    {item.submenu.map((subItem) =>(
                                        <li key={item.id}><a href={subItem.link}><span >{subItem.title}</span></a></li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }

                </div>


            </footer>

            <hr/>

            <div className="wp-sponsors">
                <img src={NSF_Sponsor} alt="NSF Sponsor"/>
                <img src={Intel_Sponsor} alt="Intel Sponsor"/>
                <img src={IBM_Sponsor} alt="IBM Sponsor"/>
                <img src={NVIDIA_Sponsor} alt="NVIDIA Sponsor"/>
            </div>


        </div>
        )


}
