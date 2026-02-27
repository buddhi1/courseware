
import { query } from "express";
import {NavData} from "./NavData";
import { useState,useEffect,useRef } from "react";

export default function WordPressHeader() {

  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});

  // const navClick = document.querySelectorAll(".wp-nav-item");


  // navClick.addEventListener("click", (e) => {
  //   console.log("clicked");
  // })

  return (
    <div className="wp-header-container navBar">

      <div>
        <a href="https://dev.cdercenter.org/">
          <img className="wp-logo-header" src="https://dev.cdercenter.org/wp-content/uploads/2025/10/CDER-Logo.png" alt="CDER Logo"/>
        </a>
      </div>
        <nav>
            <ul className="wp-navigation-container">

                {
                  NavData.map((item) => (

                      <li className="wp-nav-item" key={item.id}>

                        <div style={{fontSize: 24}}>{item.title}

                        <svg className="wp-nav-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                          <path  d="M1.50002 4L6.00002 8L10.5 4"  
                            stroke="currentColor"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round">  
                          </path>
                        </svg>

                        </div>

                      </li>

                    )
                  )
                }

                {/* <li className="wp-nav-item">
                  <div style={{fontSize: 24}}>About CDER 
                  <svg className="wp-nav-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                    <path  d="M1.50002 4L6.00002 8L10.5 4"  
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round">  
                    </path>
                  </svg>
                  </div>
                </li>

                <li className="wp-nav-item">
                  <div style={{fontSize: 24}}>Advancing PDC
                    <svg className="wp-nav-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                      <path d="M1.50002 4L6.00002 8L10.5 4"  
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">  
                      </path>
                    </svg>
                  </div>
                </li>

                <li className="wp-nav-item">
                  <div style={{fontSize: 24}}>Conference Workshops
                    <svg className="wp-nav-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                      <path d="M1.50002 4L6.00002 8L10.5 4"  
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">  
                      </path>
                    </svg>
                  </div>
                </li>

                <li className="wp-nav-item">
                  <div style={{fontSize: 24}}>Community Resources
                    <svg className="wp-nav-arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                      <path d="M1.50002 4L6.00002 8L10.5 4"  
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round">  
                      </path>
                    </svg>
                  </div>
                </li> */}

            </ul>
        </nav>

    </div>
  );
}
