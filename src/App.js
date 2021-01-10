import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Services from '../src/component/services'
import webIcon from '../src/assets/images/dev.svg';
import uiIcon from '../src/assets/images/uiux.svg';
import mobileIcon from '../src/assets/images/mobile.svg';
import dashIcon from '../src/assets/images/dashboard.svg';
import qaIcon from '../src/assets/images/qa.svg';
import trainIcon from '../src/assets/images/training.svg';

function App() {
  return (
    <div className="App">

<header className="site-header sticky-top py-1">
  <nav className="container d-flex flex-column flex-md-row justify-content-between">
    <a className="py-2" href="#" aria-label="Product">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mx-auto" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
    </a>
    <a className="py-2 d-none d-md-inline-block" href="#">Tour</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Product</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Features</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Enterprise</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Support</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Pricing</a>
    <a className="py-2 d-none d-md-inline-block" href="#">Cart</a>
  </nav>
</header>

<main>
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 fw-normal">TechnoBrisk</h1>
      <p className="lead fw-normal">Falco Peregrinus’s partnership is an extension of our portfolio offerings and enable our clients to realize true business value with increased productivity, higher efficiencies and cost benefits.  We are aligned to the futuristic thought processes of our business partners. Syncing with the ideologies of world leaders in inventive technologies to deliver the best. 

We continuously enhance our solutions with new features insights, tools, resources, and programs that you need to amaze your customers and drive growth. The aim is always to provide simplified complex technological solutions, the potential of which will not be restricted to one output in particular, but even rectify even the smallest of the small issues in order to gain more clarity.</p>
      <a className="btn btn-outline-secondary" href="#">Coming soon</a>
    </div>
    <div className="product-device shadow-sm d-none d-md-block"></div>
    <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>

  <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
   <Services
      heading="Web Development"
      contentData="With considerable years of tech expertise and a full commitment to delivering front line products and services, FALCO has grown into a team of professionals skilled of addressing clients’ business challenges by providing custom software development services such as desktop, web and mobile application development, cloud computing, DevOps and QA, UI and UX. Our team has a proven track record in developing custom software solutions for large enterprise organizations, mid-sized and small companies across the globe."
      imgUrl={webIcon}
    />
    <Services
      heading="UI/UX Design"
      contentData="UX is all about how users interact with the product.​It’s also about what they do, why they do it, including the where and when.​A data-driven approach, ensures that the “what-ifs” and “why-nots” are answered, and each user who interacts with your product gets a seamless experience.​A simple and sophisticated UI design requires an eye for detail.​An accessible aesthetic design backed by a technical architecture will translate into a user-friendly and engaging interface that will augment the usability of the product.​"
      imgUrl={uiIcon}
    />
    <Services
    heading="Mobile Application"
    contentData="A fully functional app that your customers can't stop raving about. We build the following app React Native apps build cross-platform apps and save 30-50% on development costs Android apps with native Android apps with Java or Kotlin that stand out in Android market iOS apps to deliver a seamless experience with your iOS apps built with Objective_C or Swift-Hybrid apps with Ionic and Phone Gap frame works fast & costs down."
    imgUrl={mobileIcon}
    />

 
  </div>

    <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
  
    <Services
      heading="Quality Assurance"
      contentData="Our quality assurance has only one aim, Ensure the final product is perfect and flawless.​Our process includes manual and automated testing techniques.​Our QA is implemented from the word go Our QA team is geared to:​Monitor the development process and ensure the product meets all the initial requirements .​Save money through prevention and fixing bugs in the earlier stages of the development process - the later you fix the bug, the more expensive it is.​"
      imgUrl={qaIcon}
    />
    <Services
      heading="Dashboard and Reporting"
      contentData="Dashboards are a collection of widgets that give you an overview of the reports and metrics you care about most. Dashboards let you monitor many metrics at once, so you can quickly check the health of your accounts or see correlations between different reports. Dashboards are easy to create, customize and share. You can also send a snapshot of your Dashboard data via email or generate a PDF file that you can distribute however you please.​​"
      imgUrl={dashIcon}
    />
    <Services
    heading="Training"
    contentData="With considerable years of tech expertise and a full commitment to delivering front line products and services, FALCO has grown into a team of professionals skilled of addressing clients’ business challenges by providing custom software development services such as desktop, web and mobile application development, cloud computing, DevOps and QA, UI and UX. Our team has a proven track record in developing custom software solutions for large enterprise organizations, mid-sized and small companies across the globe."
    imgUrl={trainIcon}
    />
 
  </div>

  
  

</main>

<footer className="container py-5">
  <div className="row">
    <div className="col-12 col-md">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg>
      <small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Cool stuff</a></li>
        <li><a className="link-secondary" href="#">Random feature</a></li>
        <li><a className="link-secondary" href="#">Team feature</a></li>
        <li><a className="link-secondary" href="#">Stuff for developers</a></li>
        <li><a className="link-secondary" href="#">Another one</a></li>
        <li><a className="link-secondary" href="#">Last time</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Resource name</a></li>
        <li><a className="link-secondary" href="#">Resource</a></li>
        <li><a className="link-secondary" href="#">Another resource</a></li>
        <li><a className="link-secondary" href="#">Final resource</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Business</a></li>
        <li><a className="link-secondary" href="#">Education</a></li>
        <li><a className="link-secondary" href="#">Government</a></li>
        <li><a className="link-secondary" href="#">Gaming</a></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><a className="link-secondary" href="#">Team</a></li>
        <li><a className="link-secondary" href="#">Locations</a></li>
        <li><a className="link-secondary" href="#">Privacy</a></li>
        <li><a className="link-secondary" href="#">Terms</a></li>
      </ul>
    </div>
  </div>
</footer>


    </div>
  );
}

export default App;
