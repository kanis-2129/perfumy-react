//Products Component
import one from "./images/two.jpg"
import two from "./images/one.jpg"
import three from "./images/three.jpg"

function Products() {
  return (
    <div class="products">

      <div class="box">

        <img src={one} alt="img1" ></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>


      <div class="box">
        <img src={two} alt="villain"></img>
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={three} alt="Designs Club"></img>
        <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
      </div>


    </div>
  )

}

export default Products
