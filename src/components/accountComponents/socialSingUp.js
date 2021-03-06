import * as React from "react";

class SocialSingUp extends React.Component {
    render() {
        return <div>
            <div className="text-left pb-3 social-title mb-3 border-bottom">
                <h5>Sing-up with social account.</h5>
            </div>

            <div className="mb-2 text-uppercase btn-social-big">
                <img className="img_size_4 mr-2"
                     src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_google-128.png"/>
                <span className="btn-social-title">google +</span>
            </div>
            <div className="mb-2 text-uppercase btn-social-big">
                <img className="img_size_4 mr-2"
                     src="https://cdn4.iconfinder.com/data/icons/bettericons/354/facebook-128.png"/>
                <span className="btn-social-title">facebook</span>
            </div>

            <div className="mb-2 text-uppercase btn-social-big">
                <img className="img_size_4 mr-2"
                     src="https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_twitter-128.png"/>
                <span className="btn-social-title">twitter</span>
            </div>
        </div>
    }
}

export default SocialSingUp;