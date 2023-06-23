import ProductItem from '../ProductItem';
import './ProductList.scss'

type Props = {
    items: object[];
};

const ProductList = ({ items }: Props) => {
    return (
        <div className='productList'>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
            <div className='productItem__container'>
                <ProductItem item={{}} />
            </div>
        </div>
    );
};

export default ProductList;