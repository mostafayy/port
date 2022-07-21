import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data";
import aui from './IMG_20220720_231113_245.jpg'
import au2 from './IMG_20220720_231321_176.jpg'
import au3 from './IMG_20220720_231438_60.jpg'
import au4 from './IMG_20220720_231537_904.jpg'
import au5 from './IMG_20220720_231700_384.jpg'
import au6 from './IMG_20220720_231750_9.jpg'
const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </p>
      </div>
      <div className="pl-list">
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href='https://mostafayy.github.io/gym/' target="_blank" rel="noreferrer">
        <img src={aui} alt="" className="p-img" />
      </a>
     </div>
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href=' https://mostafayy.github.io/car/' target="_blank" rel="noreferrer">
        <img src={au2} alt="" className="p-img" />
      </a>
     </div>
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href=' https://mostafayy.github.io/nft/' target="_blank" rel="noreferrer">
        <img src={au3} alt="" className="p-img" />
      </a>
     </div>
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href=' https://mostafayy.github.io/coin/' target="_blank" rel="noreferrer">
        <img src={au4} alt="" className="p-img" />
      </a>
     </div>
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href='https://mostafayy.github.io/trav/' target="_blank" rel="noreferrer">
        <img src={au5} alt="" className="p-img" />
      </a>
     </div>
      <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href='https://mostafayy.github.io/cat/' target="_blank" rel="noreferrer">
        <img src={au6} alt="" className="p-img" />
      </a>
     </div>
        {/* {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} */}
      </div> 
    </div>
  );
};

export default ProductList;