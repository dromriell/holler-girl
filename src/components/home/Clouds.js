import cloud from "../../assets/cloud-1.png";

const Clouds = (props) => {
  const { pageOffset } = props;

  return (
    <div id="clouds">
      <div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          transform: `translate(${pageOffset * -0.1}px, 25px)`,
          opacity: 1 - pageOffset * 0.001,
        }}
      ></div>
      <div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          transform: `translate(${pageOffset * 0.1}px, 0)`,
          opacity: 1 - pageOffset * 0.001,
        }}
      ></div>
    </div>
  );
};

export default Clouds;
