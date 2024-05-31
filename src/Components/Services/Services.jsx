import "./Services.css";

export default function Services() {
  return (
    <div className="servicesSection">
      <h2 className="servicesSectionHeader">Our Services</h2>
      <div className="servicesContainer">
        <div className="addingPosition">
          <img
            className="serviceOneBrandingPattern"
            src="../../../src/assets/images/brandingpattren.png"
            alt=""
          />
          <div id="service1">
            <h3>Branding</h3>
            <p className="addingPadding">
              <span className="lightBlackColor bold">The brand is hope, </span>
              <br /> It is also the source of inspiration for everything you do
              when you deal with your customers and that is the important and
              emotional thing.{" "}
              <span className="bold lightBlackColor">
                Your Brand and Visual identity
              </span>{" "}
              represents an intrinsic Value to your company.
            </p>
            <p className="lightBlackColor bold addingPadding">
              In focal X agency, we provide:
            </p>
            <p className="addingWidth-50 addingPadding">
              Visual identity design. Define Brand Identity. Define Brand
              personality. Building Your brand strategy. Market research and
              competitors study.
            </p>
            <p className="lightBlackColor bold">
              We walk with you from A to Z.
            </p>
            <img
              className="addingPositionForPhoto"
              src="../../../src/assets/images/brandingOrange.png"
              alt=""
            />
          </div>
        </div>
        <div className="addingPosition">
          <img
            className="serviceTwoBrandingPattern"
            src="../../../src/assets/images/markrtingpattren.png"
            alt=""
          />
          <div id="service2">
            <h3>Marketing</h3>
            <p className="addingPadding">
              Talk to your customers and tell them
              <span className="lightBlackColor bold">
                {" "}
                you and your company's{" "}
              </span>
              story through us the way you want. Let us plan the content that
              will bring your audience closer to you.
            </p>
            <p className="addingPadding lightBlackColor bold">
              In our marketing agency, we provide:
            </p>
            <p className="addingWidth-50 addingPadding">
              E-mail marketing. <br />
              Affiliate marketing. <br />
              Influencer marketing. <br />
              Market research and Analysis. <br />
              App store optimization ( ASO ). <br />
              Search engine Marketing ( SEM ). <br />
              Search engine optimization ( SEO ). <br />
              Social media marketing & campaigns. <br />
            </p>
            <img
              className="addingPositionForPhoto"
              src="../../../src/assets/images/markiting.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
