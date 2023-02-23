import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="plistItem">
        <img className="plistImg" src="./images/type_1.webp" alt="" />
        <div className="pListTitles">
          <h1>Hotels</h1>
          <h2>233 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src="./images/type_2.jpg" alt="" />
        <div className="pListTitles">
          <h1>Apartments</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src="./images/type_3.jpg" alt="" />
        <div className="pListTitles">
          <h1>Resorts</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src="./images/type_4.jpg" alt="" />
        <div className="pListTitles">
          <h1>Villas</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>

      <div className="plistItem">
        <img className="plistImg" src="./images/type_5.jpg" alt="" />
        <div className="pListTitles">
          <h1>Cabins</h1>
          <h2>2331 hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
