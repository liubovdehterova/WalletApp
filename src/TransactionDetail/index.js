import React, { Component } from "react";

class TransactionDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { sum, nameUser, date } = this.props;

        return (
            <div className="main">
                <section className="main__header">
                    <h1 className="main__title">{sum}</h1>
                    <p className="transactions__content__inner__description__item">
                        {nameUser}
                    </p>
                    <p className="transactions__content__inner__description__item">
                        {date}
                    </p>
                </section>
                <section className="main__main">
                    <div className="main__main__t">
                        <h2 className="main__main__title">Status: Approved</h2>
                        <p className="transactions__content__inner__description__item">
                            RBC Bank Debit Card
                        </p>
                    </div>
                    <div className="main__main__b">
                        <h3 className="main__main__b__subtitle">Total</h3>
                        <p className="main__main__b__balance">{sum}</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default TransactionDetail;
