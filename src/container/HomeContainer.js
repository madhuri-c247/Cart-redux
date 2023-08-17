import Home from '../component/Home';
import {connect} from 'react-redux'
import  {add,remove}  from '../redux/action/action';

const mapStateToprops = (state) =>({
    data: state.cartItem

})
const mapDispatchToProps = (dispatch)=>({
    addToCart: data=> dispatch(add(data)),
    removeToCart: data=> dispatch(remove(data))
    
})

export default connect(mapStateToprops, mapDispatchToProps)(Home)

// export default Home;