import { Header } from "./component/header.js";
import { Part1 } from "./component/bodyPart1.js";
import { Part2 } from "./component/bodyPart2.js";
import { Part3, Part3_2 } from "./component/bodyPart3.js";
import { Part4 } from "./component/bodyPart4.js";
import { Footer } from "./component/footer.js";
import { Product } from "./component/product.js";

window.customElements.define('site-header', Header)
window.customElements.define('site-body-part1', Part1)
window.customElements.define('site-body-part2', Part2)
window.customElements.define('site-body-part3', Part3)
window.customElements.define('site-body-part3-2', Part3_2)
window.customElements.define('site-body-part5', Part4)
window.customElements.define('site-footer', Footer)
window.customElements.define('site-product', Product)