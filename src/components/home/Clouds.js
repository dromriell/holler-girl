import cloud from "../../assets/cloud-1.webp";

const Clouds = (props) => {
  const { pageOffset } = props;

  return (
    <div id="clouds">
      <div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          transform: `translate(${pageOffset * -0.1}px, 0)`,
          alignSelf: "flex-end",
          opacity: 1.35 - pageOffset * 0.001,
        }}
      ></div>
      <div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          transform: `translate(${pageOffset * 0.1}px, 0)`,
          alignSelf: "flex-start",
          opacity: 1.35 - pageOffset * 0.001,
        }}
      ></div>
    </div>
  );
};

export default Clouds;
