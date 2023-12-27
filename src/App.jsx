import "./scss/main.scss";
import "animate.css";
import productImgMobile from "../src/assets/images/image-product-mobile.jpg";
import productImgDesktop from "../src/assets/images/image-product-desktop.jpg";

function App() {
  return (
    <div className="card-wrapper">
      <div className="container">
        <picture>
          <source media="(min-width: 600px)" srcset={productImgDesktop} />
          <img src={productImgMobile} alt="" />
        </picture>
        <article>
          <div>PERFUME</div>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p>
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the House of CHANEL{" "}
          </p>
          <div>
            <div>$149.99</div> <span>$169.99</span>
          </div>
          <button>
            <div className="icon"></div>Add to Cart
          </button>
        </article>
      </div>
    </div>
  );
}

export default App;
