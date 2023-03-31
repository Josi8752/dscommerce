
import './styles.css'

import ProductsCategories from '../../components/ProductsCategories';
import { ProductDTO } from '../../models/product';


type Props = {
    product: ProductDTO;
}
export default function ProductDetailsCard({ product }: Props) {

    return (

        <div className="dsc-card dsc-mb20">
            <div className="dsc-product-details-top dsc-line-bottom">
                <img src={product.imgUrl} alt={product.name} />
            </div>
            <div className="dsc-product-details-bottom">
                <h3>{product.price.toFixed(2)}</h3>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <div className="dsc-category-container">
                    {
                        product.categories.map(item => (
                            <ProductsCategories key={item.id} name={item.name} />
                        ))
                    }

                </div>
            </div>
        </div>



    );
}