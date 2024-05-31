import "./Header.css";

export default function Header() {
  return (
    <div className="header" id="headerFornavBar">
      <div className="content">
        <div className="headerFirstChild">
          <h1>Hey !! Mario still here, But don’t forget that</h1>
          <p>
            At focal X agency, we are working to build somthing different. Here
            you’ll have a group of creative people who specialize in: Branding,
            Digital Marketing, Web/App Development, Ui/Ux Content creation,
            Graphic design, Social media and More........ So you can take a tour
            in our website, OR just
            <span id="bold"> Press Start :)</span>
          </p>
        </div>
        <div className="headerSecondChild">
          <img
            className="headerImage"
            src="../src/assets/images/gameBoy-min.png"
            alt="gameBoy"
          />
          <img
            className="headerPattern"
            src="../../../src/assets/images/pattren.png"
            alt=""
          />
          <img
            className="headerPressStart"
            src="../../../src/assets/images/pressStart.svg"
            alt=""
          />
          <span id="startWord">Start</span>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
