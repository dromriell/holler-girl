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
        <div id="homeHeroBorderImg"></div>
      </div>
    </>
  );
};

export default HeroParallax;
