
export default function WordPressFooter() {


    return(
        <div className="wp-footer-container">

            <div className="wp-footer">

                <div className="wp-footer-info-container">

                    <img className="wp-logo-footer" src="https://dev.cdercenter.org/wp-content/uploads/2025/10/CDER-Logo.png" alt="CDER Logo"/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dictum cursus elit ac varius.
                    Pellentesque feugiat sem ut elit laoreet, nec molestie ipsum vulputate. Sed id diam et arcu ultricies feugiat.
                    </p>
                    <img src="/src/common/images/InBug-White.png" alt="LinkedIn Logo"/>

                    <p style={{fontSize: 14, marginLeft: 18}}>© CDER 2025</p>

                </div>

                <div className="wp-footer-nav-container">

                    <div className="footer-nav-item">
                        <p>About CDER</p>
                        <ul>
                            <li><a><span>PDC Curriculum</span></a></li>
                            <li><a><span>PDC Center</span></a></li>
                        </ul>
                    </div>

                    <div className="footer-nav-item">
                        <p>Advancing PDC</p>
                        <ul>
                            <li><a><span>Book Porject</span></a></li>
                            <li><a><span>JPDC Special Issues</span></a></li>
                            <li><a><span>PDC Training Program</span></a></li>
                            <li><a><span>Conference Presentations and Publications</span></a></li>
                            <li><a><span>Institute Planning Grant</span></a></li>
                        </ul>
                    </div>

                    <div className="footer-nav-item">
                        <p>Conference Workshops</p>
                        <ul>
                            <li><a><span>Early Adopter Program</span></a></li>
                            <li><a><span>EduPar</span></a></li>
                            <li><a><span>EduHPC</span></a></li>
                            <li><a><span>EduHiPC</span></a></li>
                            <li><a><span>SIGCSE</span></a></li>
                        </ul>
                    </div>

                    <div className="footer-nav-item">
                        <p>Community Resources</p>
                        <ul>
                            <li><a><span>Courseware</span></a></li>
                            <li><a><span>Peachy Assignments</span></a></li>
                            <li><a><span>Related Projects</span></a></li>
                            <li><a><span>CDER Cluster</span></a></li>
                        </ul>
                    </div>

                </div>


            </div>

            <hr/>

            <div>
                <img src="src/common/images/NSF-Sponsor.png" alt="NSF Sponsor"/>
                <img src="src/common/images/Intel-Sponsor.png" alt="Intel Sponsor"/>
                <img src="src/common/images/IBM-Sponsor.png" alt="IBM Sponsor"/>
                <img src="src/common/images/NVIDIA-Sponsor.png" alt="NVIDIA Sponsor"/>
            </div>


        </div>
        )


}
