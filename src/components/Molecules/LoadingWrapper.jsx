import {Oval} from 'react-loader-spinner';
import "./LoadingWrapper.scss";
import {ReactComponent as OffroadWheel} from 'images/wheel-tire.svg';

const LoadingWrapper = () => {
    // renders the offroad wheel
    return <div className="loading-wrapper">
        <OffroadWheel className="loading-image"  />
    </div>
}

export default  LoadingWrapper;