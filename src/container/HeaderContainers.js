import Header from '../component/Header'
import {connect} from 'react-redux'


const mapStateToprops = (state) =>({
    data: state.cartItem

})

export default connect(mapStateToprops)(Header)