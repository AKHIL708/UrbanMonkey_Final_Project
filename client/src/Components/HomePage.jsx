import React from "react";
import Footer from "./Footer";

export default function HomePage() {
  const Alert = () => {
    alert("plz register your self to Use Services 😊 ");
  };
  return (
    <>
      <h4 className="HomePageHeading">Boys Collections</h4>
      <div className="HomePageNavabar" onClick={Alert}>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://image.made-in-china.com/44f3j00JVBEDzuoZkpw/Men-s-Top-Tie-Dye-T-Shirt-Multi-Color-Mixed-Tshirt-3D-Digital-Printing-Loose-Casual-T-Shirt.jpg"
            alt="coloured T-shirt"
          />
          <h4>30% Off on T-shirt</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://sc04.alicdn.com/kf/H54d4b9df49524163a27bf70106821863l.jpg"
            alt="coloured t shirt"
          />
          <h4>20% Off on Jeans</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://cdn.shopify.com/s/files/1/0661/7423/products/untitled-8707-copy.jpg?v=1615208736"
            alt="coloured t shirt"
          />
          <h4>25% Off on Caps</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://m.media-amazon.com/images/I/41mYAtBDQiL._UL1100_.jpg"
            alt="coloured t shirt"
          />
          <h4>25% Off on Glass</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://cdn.shopify.com/s/files/1/0661/7423/products/carry-ninja-002-zoom_250x250@2x.jpg?v=1618231118"
            alt="glass"
          />
          <h4>5% Off on Key Chains</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://static-01.daraz.com.bd/p/72b5339c3a985e825e3f08b91fec6471.jpg"
            alt="coloured t shirt"
          />
          <h4>15% Off on Bracelets</h4>
        </div>
      </div>
      <div className="line">
        <h4 className="HomePageHeadingTwo">Girls Collections</h4>
      </div>
      <div className="HomePageNavabar" onClick={Alert}>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1625600087-_108800793.jpg?crop=1xw:0.978xh;center,top&resize=480:*"
            alt="coloured t shirt"
          />
          <h4>12% Off on Tops</h4>
        </div>
        <div
          className="boxOne"
          style={{ marginLeft: "75px", marginRight: "55px" }}
        >
          <img
            className="boxOneImg"
            src="https://hollywoodlife.com/wp-content/uploads/2020/09/Screen-Shot-2021-04-08-at-9.58.52-AM.png"
            alt="coloured t shirt"
          />
          <h4>40% Off on Jeans</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://cdn.shopify.com/s/files/1/0661/7423/products/billions-front.jpg?v=1627023874"
            alt="coloured t shirt"
          />
          <h4>25% Off on Caps</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://cdn.shopify.com/s/files/1/0661/7423/products/avenger-003-right-view.jpg?v=1648126317"
            alt="coloured t shirt"
          />
          <h4>25% Off on Glass</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://www.byrdie.com/thmb/HpiNQ9E4DbHwhLSfReqOP_wWcY0=/800x800/filters:no_upscale():max_bytes(150000):strip_icc()/purse1-3463d043e3c949fe89e9df96f02afff1.jpg"
            alt="glass"
          />
          <h4>5% Off on Hand Bags</h4>
        </div>
        <div className="boxOne">
          <img
            className="boxOneImg"
            src="https://cdn.shopify.com/s/files/1/0661/7423/products/gully-gang-004-front.jpg?v=1618406379"
            alt="coloured t shirt"
          />
          <h4>15% Off on Masks</h4>
        </div>
      </div>

      <div className="arrival">
        <h1> New Arrivals </h1>
      </div>

      <div className="rowSetting" onClick={Alert}>
        <div className="secondSection" onClick={Alert}>
          <img
            className="secondSectionImage"
            src="https://image.cnbcfm.com/api/v1/image/106542009-1589805742445michaeljordansgame-wornautographednikeairjordan1s1985_1.jpg?v=1589805820&w=1920&h=1080"
            alt=""
          />
          <div className="enclose">
            <h1>Urban Shoes </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quasi natus. Illo sed officia ea maxime. Ipsa minus debitis
              veniam.
            </p>
          </div>
        </div>

        <div className="secondSection">
          <div className="enclose">
            <h1>Ripped Top </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quasi natus. Illo sed officia ea maxime. Ipsa minus debitis
              veniam.
            </p>
          </div>

          <img
            className="secondSectionImage"
            src="https://i.pinimg.com/originals/6a/c3/31/6ac33130c81145c475f032b844771146.jpg"
            alt=""
          />
        </div>
        <div className="secondSection">
          <img
            className="secondSectionImage"
            src="https://i.pinimg.com/originals/c7/7a/b4/c77ab422c079eb2373a0d733f4ab8f84.jpg"
            alt=""
          />
          <div className="enclose">
            <h1>Ripped Jackets </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quasi natus. Illo sed officia ea maxime. Ipsa minus debitis
              veniam.
            </p>
          </div>
        </div>
        <div className="secondSection">
          <div className="enclose">
            <h1>Ripped Jackets For Girls </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
              quasi natus. Illo sed officia ea maxime. Ipsa minus debitis
              veniam.
            </p>
          </div>

          <img
            className="secondSectionImage"
            src="https://i.pinimg.com/736x/32/28/14/3228140aded9e0f026e53455d425f58f.jpg"
            alt=""
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
