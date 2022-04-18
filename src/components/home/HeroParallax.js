import border from "../../assets/forest-border-black.png";

const HeroParallax = (props) => {
  const { pageOffset } = props;

  return (
    <>
      <div
        id="homeHeroBackground"
        style={{ transform: `translate3d(0px, ${pageOffset * 0.14}px, 0px)` }}
      >
        <div id="homeHeroImg"></div>
      </div>

      <div
        id="homeHeroBorder"
        style={{
          transform: `translateY(${pageOffset * 0}px)`,
        }}
      >
        <div
          id="homeHeroBorderImg"
          style={{
            backgroundImage: `url(${border})`,
          }}
        ></div>
      </div>
    </>
  );
};

export default HeroParallax;
