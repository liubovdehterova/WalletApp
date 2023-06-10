import React from "react";

class CardBalanc extends React.Component {
    constructor(props) {
        super(props);
    }
    dif() {
        let available = Number(this.props.maxBalance) - Number(this.props.balance);
        available.toFixed(2)
        return new Intl.NumberFormat('en-US').format(available);
    }
    render() {
        return (
            <section className="card">
                <div className="container">
                    <h2 className="card__title">
                        Card Balance
                    </h2>
                    <p className="card-balance">
                        ${ Number(this.props.balance).toFixed(2) }
                    </p>
                    <p className="card__available">
                        ${ this.dif() } Available
                    </p>
                </div>
            </section>
        )
    }
}

export default CardBalanc