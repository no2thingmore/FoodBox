import React from 'react';
import './index.scss';
import axios from 'axios';
// import useAsync from './useAsync';
import useAsync from '../customHook/useAsync';
import MainProduct from './MainProduct';
import { API_URL } from '../config/contansts'
import { Carousel } from 'antd'; // 이미지 슬라이더

async function getProducts() {
// 상품 정보를 가져오는 비동기 함수, API에서 상품 데이터를 가져옴
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
}
// carousel
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    position: 'absolute',
    bottom: '50px'
};
const MainPage = (props) => {
    
    const [state ] = useAsync(getProducts, []) // useAsync 훅을 사용하여 상품 데이터 가져옴
    const { loading, data:products, error} = state;
    if(loading) return <div>로딩중 ......</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!products) return <div>로딩중입니다.</div>

    // * (비동기)
    // const [ state ] = useAsync(getProducts);
    // const { loading, data:products, error } = state;
    // if(loading) return <div>로딩중...</div>
    // if(error) return <div>에러가 발생했습니다.</div>
    // if(!products) return <div>상품이 없습니다.</div>;
        
    // 원래 받아오던 방법 (비동기 x)
    // const [ products, setProducts ] = useState([]);
    // useEffect(()=>{
    //     axios.get("${API_URL}/products")
    //     .then((result)=>{
    //         const products = result.data;
    //         setProducts(products);
    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    // }, [])
    // if(products === [] ) return <div>로딩중입니다.</div>
    
    // carousel
    const onChange = (currentSlide) => {
        console.log(currentSlide);
      };
    return (
        <div>
            <div id="main">
                    <div id="banner">
                    <Carousel afterChange={onChange} autoplay>
                    <div>
                        <img src="images/banners/banner1.jpg" alt="" /> {/* 배너 1번 */}
                        <h3 style={contentStyle}>&nbsp;</h3>
                    </div>
                    <div>
                        <img src="images/banners/banner2.jpg" alt="" /> {/* 배너 2번 */}
                        <h3 style={contentStyle}>&nbsp;</h3>
                    </div>
                    <div>
                        <img src="images/banners/banner3.jpg" alt="" /> {/* 배너 3번 */}
                        <h3 style={contentStyle}>&nbsp;</h3>
                    </div>
                    </Carousel>
                </div>
                <div id="product-list" className='inner'>
                    <h2>금주의 추천 레시피!</h2>
                    <div id="product-items">
                        {/* 나중에 map 이용해서 밑에꺼 8개 뿌려줄거임 */}
                        {products.map(product => <MainProduct key = {product.id} product={product} />)}   
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainPage;