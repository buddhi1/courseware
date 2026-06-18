import {NavData} from "../NavData";
import { useState,useEffect,useRef } from "react";

export default function WordPressHeader() {

  const [openDropdown, setOpenDropdown] = useState(null);
  const navRefs = useRef(null);


  function handleClick(id){
    
    setOpenDropdown(prev => prev === id ? null : id)
  }

    
  useEffect(() => {

    if(openDropdown === null) return;

    const handleOutsideClick = (event) => {
      if (!navRefs.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return() =>{
        document.removeEventListener("click", handleOutsideClick);
    };
    
  }, [openDropdown]);


  return (
    <div className="wp-header-container navBar">

      <div>
        <a href="https://cdercenter.org/">
          <img className="wp-logo-header" src="https://cdercenter.org/wp-content/uploads/2025/10/CDER-Logo.png" alt="CDER Logo"/>
        </a>
      </div>
      <nav ref={navRefs}>
        <ul className="wp-navigation-container">
          {
            NavData.map((item) => (
              <li className="wp-nav-item" key={item.id}>
                <div
                  className="wp-nav-item_title" 
                  style={{fontSize: 24}} 
                  onClick={() => handleClick(item.id)}
                >
                  {item.title}
                  <svg className={`wp-nav-arrow ${openDropdown === item.id ? "rotated" : ""}`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden="true" focusable="false">
                    <path  d="M1.50002 4L6.00002 8L10.5 4"  
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round">  
                    </path>
                  </svg>
                  

                </div>
                
                {openDropdown === item.id && item.submenu && 
                
                  <div className="wp-nav-dropDown">

                    <ul>
                      {item.submenu.map((subItem) => (
                        <li className="wp-nav-sub_item" key={item.id}><a href={subItem.link}><span>{subItem.title}</span></a></li>

                      ))}
                    </ul>
                  
                  </div>
                }

              </li>

              )
            )
          }

        </ul>
      </nav> 
    </div>
    
  );
}
