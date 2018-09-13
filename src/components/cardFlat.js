import React from "react";

class CardFlat extends React.Component {
    render() {
        return <div className="col-md-6 card-with mb-5" onClick={() => window.location = "/flat"}>
            <div className="card">
                <div className="">
                    <img src="https://odis.homeaway.com/odis/listing/e2a65868-2ef6-42f8-aca7-46d2f771197b.c10.jpg"
                         className="img-fluid"/>
                    <div className="px-3 text-left pb-3 mt-3">
                        <small className="text-muted">Viewed 6 times in the last 48 hours</small>
                        <h4 className="card-title title">Sealodge 25. Cayman Kai, waterfront, secluded, private beach,
                            super snorkeling{/*this.props.name*/}</h4>
                        <div className="d-flex justify-content-between align-items-center pt-4 mt-4">
                            <div className="pb-2">
                                <strong className="h4 text-dark">{this.props.cost}€</strong>
                                <small className="text-muted"> per night</small>
                            </div>
                            <a className="text-info">{this.props.location}</a>
                            <small className="text-muted">{this.props.date}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="col-md-4 card-with">
            <div className="card mb-4 box-shadow">
                <a href='/flat'><img className="card-img-top"
                     src={this.props.image}
                     alt="Card cap"/></a>

                <div className="card-body">
                    <div className="bg-white h4">{this.props.name}</div>
                    <p className="card-text">{this.props.name}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <small className="text-muted"><strong className="h5 text-info">{this.props.cost}€</strong> per
                            night
                        </small>
                        <a className="text-info">{this.props.location}</a>
                        <small className="text-muted">{this.props.date}</small>
                    </div>
                </div>
            </div>
        </div>*/
        }

    }
}

export default CardFlat