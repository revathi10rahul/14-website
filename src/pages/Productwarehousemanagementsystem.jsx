import React, { useEffect } from "react";
import "./warehouse.css"; // Include your CSS styles here
// import aporablack from "../Assets/apora_black.png";
import multichannelintegration from "../Assets/Multichannelintegration.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import purvey_apora_black from "../Assets/purvey_apora_black.png";
import Chart2 from "./Chart2";
// import ValuedeliveredProductwms from './ValuedeliveredProductwms'
import { Helmet } from 'react-helmet';

import {
  faEnvelope,
  faUpLong,
  faLocationDot,
  faPhone,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
const Productwarehousemanagementsystem = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const handleScroll = () => {
      const pinSpacer = document.querySelector(".pin-spacer");
      const windowHeight = window.innerHeight;
      const windowBottom = window.scrollY + windowHeight;

      if (pinSpacer) {
        const pinSpacerTop =
          pinSpacer.getBoundingClientRect().top + window.scrollY;
        const pinSpacerBottom = pinSpacerTop + pinSpacer.offsetHeight;

        if (pinSpacerTop < windowBottom && pinSpacerBottom > window.scrollY) {
          pinSpacer.classList.add("is-sticky");
        } else {
          pinSpacer.classList.remove("is-sticky");
        }
      }

      // Add 'is-inview' class when scrolled down 200px
      const scrollPosition = window.scrollY;
      const whatWeDoWraps = document.querySelectorAll(".WhatWeDo_whatWeDoWrap");

      whatWeDoWraps.forEach((wrap) => {
        const elemTop = wrap.getBoundingClientRect().top + window.scrollY;
        if (scrollPosition > elemTop - 200) {
          wrap.classList.add("is-inview");
        } else {
          wrap.classList.remove("is-inview");
        }
      });

      // Adjust transform of '.WhatWeDo_scrollElement' dynamically
      const inviewWrap = document.querySelector(
        ".WhatWeDo_whatWeDoWrap.is-inview"
      );
      const scrollElement = document.getElementById("scrollElement");
      const whatWeDoContainer = document.getElementById("whatWeDoContainer");

      if (inviewWrap && scrollElement && whatWeDoContainer) {
        const inviewTop =
          inviewWrap.getBoundingClientRect().top + window.scrollY;
        let inviewScroll = scrollPosition - inviewTop + 150;
        const containerHeight = whatWeDoContainer.offsetHeight;
        inviewScroll = Math.min(containerHeight, Math.max(0, inviewScroll));
        scrollElement.style.transform = `translateY(${inviewScroll}px)`;
      } else if (scrollElement) {
        scrollElement.style.transform = "translateY(0)";
      }

      // Section reveal on scroll for .WhatWeDo_whatWeDoCotentList
      whatWeDoWraps.forEach((wrap) => {
        const sectionTop = wrap.getBoundingClientRect().top + window.scrollY;
        const sectionBottom = sectionTop + wrap.offsetHeight;
        const parallaxOffset = (window.scrollY - sectionTop) * 0.2;

        if (
          scrollPosition + windowHeight / 2 > sectionTop &&
          scrollPosition < sectionBottom
        ) {
          wrap
            .querySelector(".WhatWeDo_whatWeDoCotentList")
            .classList.add("fade-in");
          wrap.querySelector(
            ".WhatWeDo_whatWeDoCotentList"
          ).style.transform = `translateY(${parallaxOffset}px)`;
        } else {
          wrap
            .querySelector(".WhatWeDo_whatWeDoCotentList")
            .classList.remove("fade-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger scroll event on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>

      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Purvey WMS offers a comprehensive, scalable, and flexible warehouse management solution tailored to your business needs. Enhance your productivity, reduce errors, and drive profitability." />
        <meta name="keywords" content="warehouse management system, WMS software, scalable WMS, warehouse operations, logistics, warehouse productivity" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="Purvey WMS - Comprehensive Warehouse Management Solution" />
        <meta property="og:description" content="Streamline your warehouse operations with Purvey WMS. Our flexible and scalable software reduces errors, increases productivity, and boosts profitability for businesses of all sizes." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/purvey-wms" />
        <title>Purvey WMS - Warehouse Management System</title>
      </Helmet>
        <div className="starting-picklistgeneration">
          <h1 className="gradient-text">
            Purvey warehouse management system <br />
          </h1>
          {/* <h3 className="gradient-text">Solution</h3> */}

          <div className="aboutpage-subtitle">
            <h6 className="gradient-text-h6">
            <img src={purvey_apora_black} alt="purvey_apora_black image" style={{ height: "80px" }} />
            </h6>
          </div>
        </div>




        <div style={{height:"0vh"}} className='mt-5'>
<Chart2/>
 </div>





{/* <ValuedeliveredProductwms/> */}

 <div className='firstdiv-multichannelintegration ' >
 <div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/productwms.jpg" alt="productwms image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>Our WMS is designed to provide a comprehensive solution for all your warehouse management needs. Whether you operate a small-scale facility or a large distribution centre, our scalable and flexible software can be tailored to meet your specific requirements. With Purvey WMS, you can streamline your operations, reduce errors, and enhance productivity, ultimately driving your business towards greater profitability.</p>
    </div>
   </div>

        <div className="container-service">
          {/* <div className="OurFormula_sectionHeading">Our Formula</div> */}
          <div className="OurFormula_formulaSubHeading">
            <p
              style={{
                color: "black",
                textAlign: "center",
                fontFamily: "pirulen",
                marginTop:'10px'
              }}
            >
              Value Delivered
            </p>
          </div>
          <div
            className="WhatWeDo_whatWeDoContainer page-container"
            id="whatWeDoContainer"
          >
            <div className="WhatWeDo_sectionHeading">What We Do</div>
            <div
              className="WhatWeDo_whatWeDoWrapContainer"
              id="whatWeDoContainer"
            >
              <div
                className="pin-spacer"
                style={{
                  width: "3px",
                  height: "100px",
                  position: "absolute",
                  zIndex: 999,
                }}
              >
                <div
                  className="WhatWeDo_scrollElement"
                  id="scrollElement"
                  style={{ width: "3px", height: "100px" }}
                ></div>
              </div>
              {[...Array(13)].map((_, i) => {
                const titles = [
                  "Inventory Control",
                  "Order Management",
                  "Warehouse Optimization",
                  "Integration Capabilities",
                  "Reporting and Analytics",
                  "Mobile Functionality",
                  "Scallability and Flexibility",
                  "3PL Compatability",
                  "Cost Savings",
                  "Customer Satisfaction",
                  "Regulatory Compailance",
                  "Streamlined Workflows",
                  "Return to Investment",
                ];
                const descriptions = [
                  "Maintain accurate and real-time visibility of inventory levels, reducing stockouts and overstock situations.",
                  "Efficiently process and fulfil orders, improving order accuracy and minimizing delays.",
                  "Optimize warehouse space utilization, reducing travel time and improving picking and replenishment processes.",
                  "Seamlessly integrate with other business systems, such as ERP and CRM, for streamlined data flow and enhanced collaboration.",
                  "Gain valuable insights into warehouse performance through comprehensive reports and analytics, enabling data-driven decision-making.",
                  "Empower employees with mobile capabilities for tasks like receiving, picking, and shipping, improving efficiency and accuracy.",
                  "Adapt the WMS to accommodate increased order volumes, additional warehouse locations, and evolving business needs.",
                  "Seamlessly collaborate with third-party logistics providers, enhancing coordination and ensuring smooth operations.",
                  "Increase operational efficiency, reduce errors, and minimize labour costs through optimized processes and automation.",
                  "Improve order accuracy, reduce lead times, and enhance overall service levels, leading to higher customer satisfaction.",
                  "Ensure adherence to industry regulations and standards through enhanced traceability and reporting capabilities.",
                  "Automate manual tasks and streamline workflows, reducing human error and improving productivity.",
                  "Achieve a positive return on investment by optimizing operations, reducing costs, and improving overall efficiency.",
                ];

                return (
                  <div  style={{overflow:"hidden"}}
                    key={i}
                    className="WhatWeDo_whatWeDoWrap isScrollView"
                    data-scroll={true}
                    data-scroll-repeat={true}
                    data-scroll-offset="50%, 50%"
                  >
                    <h3>{titles[i]}</h3>
                    <div className="WhatWeDo_whatWeDoCotentList">
                      <div className="WhatWeDo_boxContent">
                        <ul>
                          <li>
                            <p className="valuedeliverd-productwms">{descriptions[i]}</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ height: "10vh" }}></div>
        </div>
      </div>
      <div style={{ marginTop: "2100px" }}>
        <footer class="footer-section">
          <div class="container">
            <div class="footer-cta pt-5 pb-5">
              <div class="row">
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-map-marker-alt"></i>
                    <div class="footer-widget-heading">
                      <h3>Find Us</h3>

                      <span style={{ color: "black" }}>
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "black" }}
                        />{" "}
                        Malambuzha Rd,
                        <br />
                        Olavakkode,
                        <br />
                        Palakkad Kerala <br />
                        678002
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="fas fa-phone"></i>
                    <div class="footer-widget-heading">
                      <h3>Call us</h3>
                      <span style={{ color: "black" }}>
                        {" "}
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ color: "black" }}
                        />{" "}
                        +91 7736742072
                      </span>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-4 mb-30">
                  <div class="single-cta">
                    <i class="far fa-envelope-open"></i>
                    <div class="footer-widget-heading">
                      <h3>Mail us</h3>
                      <span style={{ color: "black" }}>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ color: "black" }}
                        />{" "}
                        info@nacresys.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="footer-content pt-5 ">
              <div class="row">
                <div class="col-xl-4 col-lg-4 mb-50">
                  <div class="footer-widget">
                    <div class="footer-logo">
                      <a href="/index">
                        <im
                          g
                          src="./Assets/ns black transparent.png"
                          class="img-fluid"
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div class="footer-text">
                      <p>
                        A decade old software development company continuously
                        focused in delivering higher levels of automation
                        leveraging new and upcoming technologies such as AI and
                        internet of things. We build solutions which are
                        scalable and can integrate seamlessly with other
                        software solutions that exist.
                      </p>
                    </div>
                    <div class="footer-social-icon">
                      <span>Follow us</span>
                      <a href="/facebook">
                        {" "}
                        <FontAwesomeIcon icon={faSquareInstagram} />{" "}
                        <i class="fab fa-facebook-f facebook-bg"></i>
                      </a>
                      <a href="/twitter">
                        <FontAwesomeIcon icon={faLinkedin} />{" "}
                        <i class="fab fa-twitter twitter-bg"></i>
                      </a>
                      <a href="/google">
                        <i class="fab fa-google-plus-g google-bg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                  <div class="footer-widget ">
                    <div class="footer-widget-heading ms-1">
                      <h3>Useful Links</h3>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                  <div class="footer-widget">
                    <div class="footer-widget-heading">
                      <h3>Subscribe</h3>
                    </div>
                    <div class="footer-text mb-25">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div class="subscribe-form">
                      <form action="#">
                        <input type="text" placeholder="Email Address" />
                        <button>
                          <FontAwesomeIcon
                            icon={faShare}
                            style={{ color: "white" }}
                          />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="copyright-area">
            <div class="container">
              <div class="row">
                <div class="col-xl-12 col-lg-12 text-center">
                  <div class="copyright-text">
                    <p>2011 © Nacre System All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <button 
        onClick={scrollToTop} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '40px',
          padding: '10px 15px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        <FontAwesomeIcon icon={faUpLong}/>
      </button>
      </div>
    </>
  );
};

export default Productwarehousemanagementsystem;
