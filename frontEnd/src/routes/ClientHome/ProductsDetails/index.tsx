import './styles.css'
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from '../../../components/PoductDetailsCard';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ProductDTO } from '../../../models/product';
import * as productService from '../../../services/product-service';
import * as cartService from '../../../services/cart-service';
import { ContextCartCount } from '../../../utils/context-cart';

export default function ProductsDetails() {

  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  const { setContextCartCount } = useContext(ContextCartCount);

  useEffect(() => {
    productService.findById(Number(params.productId))
      .then(response => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch(() => {
        navigate('/');
      });

  }, []);

  function handleByClick() {
    if (product) {
      cartService.addProduct(product);
      setContextCartCount(cartService.getCart().items.length);
      navigate("/cart")
    }
  }

  return (

    <main>
      <section id="product-details-section" className="dsc-container">

        {
          product &&
          <ProductDetailsCard product={product} />
        }
        <div className="dsc-btn-page-container">
          <div onClick={handleByClick}>
            <ButtonPrimary text='Comprar' />
          </div>

          <Link to="/"><ButtonInverse text='Início' /></Link>

        </div>
      </section>
    </main>
  );
}