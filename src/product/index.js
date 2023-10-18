import React from 'react';
import "./product.scss"
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useAsync from '../customHook/useAsync'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts'
import step1 from './step1.png';
import step2 from './step2.png';
import step3 from './step3.png';
import step4 from './step4.png';


async function getProduct(id) {
    const response = await axios.get(`${API_URL}/product/${id}`)
    return response.data;
}
const ProductPage = (props) => {
    const navigate = useNavigate();

    // product /1
    const { id } = useParams();
    const [state] = useAsync(()=>getProduct(id), [id]);
    const { loading, data:product, error } = state;

    const productDel = () => {
        axios.delete(`${API_URL}/product/${id}`)
        .then(result=>{
            console.log("삭제되었습니다.");
            navigate("/");
        })
        .catch(e=> {
            console.log(e);
        })
    }
    if(loading) return <div>로딩중입니다.....</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!product) return null;

    // useEffect(비동기 x)
    // const [ product, setProduct ] = useState(null);
    // // useParams() 실행되면 파라미터 값을 가지고 있는 객체를 반환
    // // product/1
    // const { id } = useParams();
    // // useEffect(function(){
    // //     axios.get(`http://localhost:3000/product/${id}`)
    // //     .then(result=> {
    // //         console.log(result);
    // //         const data = result.data;
    // //         setProduct(data);
    // //     })
    // //     .catch(e=> {
    // //         console.log(e);
    // //     })
    // // }, []) // 빈 배열 넣어줘야 마운트 될 때 한번만 시행
    // // if(!product) return <div>로딩중입니다...</div>

    return (
        <div className='inner'>
            
            <div id="profile-box">
                <ul>
                    <li>
                        
                    </li>
                    <div id="product_name">
                        햄 치즈 토스트 {/* {product.name} */}
                    </div>
                    <div id="product_info">
                        <li>
                            ~~개의 평가
                        </li>
                        <li>소요시간 : 5~10분</li>                        
                    </div>
                </ul>
            </div>
            
            
            <div id="image-box">
                <img src={product.imageUrl} alt =""/>
            </div>
            <div id="product_detail">
                <section id="material">
                    <div id="material_head">
                        <li>재료</li>
                    </div>
                    <div id="material_inner">
                        <li>식빵</li>
                        <li>햄, 슬라이스</li>
                        <li>치즈, 슬라이스</li>
                    </div>
                    <div id="material_head">
                        <li>추가 재료</li>
                    </div>
                    <div id="material_inner">
                        <li>딸기잼</li>
                        <li>양상추</li>
                        <li>케첩</li>
                    </div>
                    <div id="material_head">
                        <li>레시피</li>
                    </div>
                    <div id="recepit">
                        <li>1. 빵을 굽다</li>
                        <img src={step1} className="step"alt=''/>
                        <li>2. 햄과 치즈를 넣다</li>
                        <img src={step2} className="step" alt=''/>
                        <li>3. 원하는 추가재료를 넣다</li>
                        <img src={step3} className="step" alt=''/>
                        <li>4. 야미</li>
                        <img src={step4} className="step" alt=''/>
                    </div>
                </section>
            </div>
            <div id="recommand">
                <div className="card">
                    <img src="" alt="" />
                    <div class="container">
                        <h4><b>추천1</b></h4>
                        <p>1234</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div class="container">
                        <h4><b>추천2</b></h4>
                        <p>1234</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div class="container">
                        <h4><b>추천3</b></h4>
                        <p>1234</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div class="container">
                        <h4><b>추천4</b></h4>
                        <p>1234</p>
                    </div>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <div class="container">
                        <h4><b>추천5</b></h4>
                        <p>1234</p>
                    </div>
                </div>
            </div>  
            <div>
                <span onClick={productDel}>삭제하기</span>
            </div>
        </div>
    );
};

export default ProductPage;