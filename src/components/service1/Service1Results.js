import Header from '../../Header';

import { useNavigate } from 'react-router';



function Service1Results() {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header />

            THIS PAGE IS NOT IMPLEMENTED YET!
            <br />

            <button onClick={() => {
                navigate(-1);
            }}>
                뒤로가기
            </button>
        </div>
    );
}

export default Service1Results;