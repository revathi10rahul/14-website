import React from 'react'
import { Container } from 'react-bootstrap'
import purvey_apora_black from '../Assets/purvey_apora_black.png'
import Chart2 from './Chart2'
import multichannelintegration from '../Assets/work3.jpg'
import improveresouceutilisation from '../Assets/Improveresourceutilisation.svg'
import efficiency from '../Assets/Efficiency.svg'
import improvedorderaccuracy from '../Assets/improvedorderaccuracy.svg'
import { useNavigate } from "react-router-dom";
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet';

function IOTintegration() {
  const navigate=useNavigate()
const handleInbountreceipt=()=>{
  navigate('/inbountreceipt')
}
const handleCrossdocking=()=>{
  navigate('/crossdocking')
}
const handleDeconsolidation=()=>{
  navigate('/purveydeconsolidation')
}
const handleQualitycheck=()=>{
  navigate('/qualitycheck')
}
const handleRepackingandputaway=()=>{
  navigate('/repackingandputaway')
}
const handlePickmanagement=()=>{
  navigate('/aporapickmanagement')
}
const handleDispatch=()=>{
  navigate('/dispatch')
}
const handleInventorymanagement=()=>{
navigate('/inventorymanagement')
}
const handleAPIintegration=()=>{
  navigate('/apiintegration')
}
const handleIotintegration=()=>{
  navigate('/iotintegration')
}
const handlePurveywms=()=>{
  navigate('/productwarehousemanagementsystem')
}
  return (
    <div>
       <Helmet>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Discover how IoT and API integration in Purvey WMS enhance warehouse operations, enabling automation, real-time data exchange, and connectivity for improved efficiency and accuracy." />
        <meta name="keywords" content="IoT, API integration, warehouse management system, WMS, real-time data exchange, automation, efficiency, connectivity" />
        <meta name="author" content="Purvey WMS" />
        <meta property="og:title" content="IoT and API Integration in PURVEY WMS" />
        <meta property="og:description" content="Enhance your warehouse operations with IoT and API integration in Purvey WMS, driving automation, real-time data synchronization, and improved efficiency across your supply chain." />
        <meta property="og:image" content="https://example.com/your-image.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/iot-api-integration" />
        <title>IoT and API Integration in PURVEY WMS</title>
      </Helmet>
      <div style={{height:"40vh"}}>
 <div className='starting-picklistgeneration'>
    <h1 className="gradient-text mt-3">Unlock the Future of Connectivity 

    <br /></h1>
    <h3 className="gradient-text">with IoT Integration</h3>

    <div className='aboutpage-subtitle'>
    <h6 className='gradient-text-h6'><img src={purvey_apora_black} alt="purvey_apora_black image" style={{height:"80px"}}/></h6>
    </div>
    </div>

    <div style={{height:"20vh"}} className='mt-5'>
    <div>
        <div class="container-chart2">
  <h1 class="level-12 rectangle "   onClick={handlePurveywms}>Purvey</h1>
  <ol class="level-22-wrapper">
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInbountreceipt}>Inbound Receipt</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleCrossdocking}> Cross Docking</h6>
     
    </li>
      <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDeconsolidation}>Deconsolidation</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleQualitycheck}>Quality Check</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleRepackingandputaway}>Repacking and Putaway</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handlePickmanagement}>Pick Management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2 me-2" onClick={handleDispatch} >Dispatch</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleInventorymanagement}>  Inventory management</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2" onClick={handleAPIintegration}>  Api Integration</h6>
     
    </li>
    <li>
      <h6 class="level-22 rectangle2  bg-success text-white" onClick={handleIotintegration}>  IOT Integration</h6>
     
    </li>
  </ol>
</div>


    </div>
 </div>

 </div>



   {/* <div className='firstdiv-multichannelintegration ' >
    <div className='multichannelintegration-image'>
        <img src={multichannelintegration} alt="" />
    </div>
    <div className='multichannelintegration-content'>
        <p style={{textAlign:"justify",padding:"40px"}}>
          <h4 style={{fontFamily:"pirulen",fontSize:"30px",letterSpacing:"3px"}}>
        IOT Integration
          </h4>
          Quality Assurance process in our PURVEY Warehouse Management System (WMS) is a fully scalable and customizable function. We understand the critical importance of maintaining high-quality standards and ensuring accuracy in every shipment that leaves your warehouse. With our comprehensive Quality Assurance feature within PURVEY WMS, you can streamline your quality control process, minimize errors, and deliver superior products to your customers.
PURVEY WMS offers a standardized and configurable Quality Assurance process that aligns with your specific business requirements. You can define and implement consistent quality control procedures across all product categories, ensuring uniformity and adherence to quality standards.
          </p></div>
   </div> */}

<div className='firstdiv-multichannelintegration ' >
<div className="multichannelintegration-image">
    <div className="image-wrapper-multi">
        <img src="../Assets/iotint.jpg" alt="iotint image" />
    </div>
</div>
    <div className='multichannelintegration-content'>
     
        <p style={{textAlign:"justify",padding:"40px"}}>In today's digital era, the Internet of Things (IoT) is revolutionizing the way warehouses operate, bringing increased automation, efficiency, and connectivity. By integrating IoT technologies into your WMS, you can unlock a wide range of benefits and transform your warehouse operations.</p>
        <p style={{textAlign:"justify",padding:"40px"}}>As technology continues to evolve, businesses are seeking ways to enhance their operations, improve connectivity, and drive efficiency. API integration in PURVEY WMS allows seamless communication and data exchange between different systems, enabling you to unlock a wide range of benefits.</p>
    </div>
   </div>


<Container className='mb-4'>
<div class="image-container-multichannelintegration">
  
  <div class="overlay">
    <p >IoT integration facilitates faster and more accurate order fulfilment processes. By leveraging IoT technologies such as wearable devices, warehouse workers can receive real-time instructions, reducing errors and improving picking accuracy. This results in faster order processing, improved customer satisfaction, and increased operational efficiency. </p>
  </div>
</div>
</Container>


   


<Footer/>

    </div>
  )
}

export default IOTintegration