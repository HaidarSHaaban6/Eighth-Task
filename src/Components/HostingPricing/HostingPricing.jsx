import "./HostingPricing.css";

export default function HostingPricing() {
  return (
    <div className="hostingPricingSection">
      <img
        className="circle1"
        src="./../src/assets/images/circle (1).svg"
        alt=""
      />
      <img
        className="circle2"
        src="./../src/assets/images/circle (1).svg"
        alt=""
      />
      <img className="circle3" src="./../src/assets/images/circle.svg" alt="" />
      <img className="circle4" src="./../src/assets/images/circle.svg" alt="" />
      <img
        className="circle5"
        src="./../src/assets/images/circle (2).svg"
        alt=""
      />
      <img
        className="circle6"
        src="./../src/assets/images/circle (2).svg"
        alt=""
      />
      <img
        className="circle7"
        src="./../src/assets/images/circle (3).svg"
        alt=""
      />
      <img
        className="circle8"
        src="./../src/assets/images/circle (3).svg"
        alt=""
      />
      <h2 className="hostingPricingSectionHeader">Hosting Pricing</h2>
      <div className="hostingPricingContainer">
        <di id="card">
          <div id="coloredSectionOfTheCard-orange"></div>
          <div className="mainSectionOfTheCard">
            <h3 className="dark mb-3">Basic</h3>
            <p className="mb-5">for very small businesses and freelancers.</p>
            <p className="lineHight">
              Disk Space:<span className="dark"> 500 M.B </span>
              <br />
              Bandwidth:<span className="dark"> 500 G.B </span>
              <br />
              SubDomains:<span className="dark"> Unlimited </span>
              <br />
              Parked Domains:<span className="dark"> Unlimited </span>
              <br />
              E-mail Accounts:<span className="dark"> Unlimited </span>
              <br />
              Cpanel (control panel):<span className="dark"> Yes </span>
              <br />
              Money Back Guarantee:<span className="dark"> 14 Days</span>
            </p>
            <button className="btn orangeButton">You will have 1 Gift</button>
          </div>
        </di>
        <di id="card">
          <div id="coloredSectionOfTheCard-purple"></div>
          <div className="mainSectionOfTheCard">
            <h3 className="dark mb-3">Pro</h3>
            <p className="mb-5">
              for for Individuals that need sharing vlogs or need huge portfolio
            </p>
            <p className="lineHight">
              Disk Space:<span className="dark"> 3000 M.B </span>
              <br />
              Bandwidth:<span className="dark"> 3 TERA </span>
              <br />
              SubDomains:<span className="dark"> Unlimited </span>
              <br />
              Parked Domains:<span className="dark"> Unlimited </span>
              <br />
              E-mail Accounts:<span className="dark"> Unlimited </span>
              <br />
              Cpanel (control panel):<span className="dark"> Yes </span>
              <br />
              Money Back Guarantee:<span className="dark"> 14 Days</span>
            </p>
            <button className="btn purpleButton">1 Gift per/mo for year</button>
          </div>
        </di>
        <di id="card">
          <div id="coloredSectionOfTheCard-lightGreen"></div>
          <div className="mainSectionOfTheCard">
            <h3 className="dark mb-3">Business</h3>
            <p className="mb-3">for Team that need sharing and reporting.</p>
            <p className="lineHight">
              Disk Space:<span className="dark"> 5000 M.B </span>
              <br />
              Bandwidth:<span className="dark"> 5 TERA </span>
              <br />
              SubDomains:<span className="dark"> Unlimited </span>
              <br />
              Parked Domains:<span className="dark"> Unlimited </span>
              <br />
              E-mail Accounts:<span className="dark"> Unlimited </span>
              <br />
              Cpanel (control panel):<span className="dark"> Yes </span>
              <br />
              Money Back Guarantee:<span className="dark"> 14 Days</span>
            </p>
            <button className="btn lightGreenButton">
              3 Gifts per/mo for year
            </button>
          </div>
        </di>
        <di id="card">
          <div id="coloredSectionOfTheCard-blue"></div>
          <div className="mainSectionOfTheCard">
            <h3 className="dark mb-3">Basic</h3>
            <p className="mb-5">
              for large companies that need admins & security
            </p>
            <p className="lineHight">
              Disk Space:<span className="dark"> 10000 M.B </span>
              <br />
              Bandwidth:<span className="dark"> 10 TERA </span>
              <br />
              SubDomains:<span className="dark"> Unlimited </span>
              <br />
              Parked Domains:<span className="dark"> Unlimited </span>
              <br />
              E-mail Accounts:<span className="dark"> Unlimited </span>
              <br />
              Cpanel (control panel):<span className="dark"> Yes </span>
              <br />
              Money Back Guarantee:<span className="dark"> 14 Days</span>
            </p>
            <button className="btn blueButton">Just Call Us</button>
          </div>
        </di>
      </div>
      <div className="extraInfo">
        <p>
          Support all the features of personal websites, corporate sites, news
          and commercial sites with 24 hours technical support.
        </p>
        <p className="hightLightWite">
          Go Online, choose your plan and Contact us on:contact@focal-x.com |
          +963 935 033 139
        </p>
      </div>
    </div>
  );
}
