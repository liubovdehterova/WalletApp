import React from "react";
import {render} from "react-dom";

// get our fontawesome imports
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class NoPaymentDue extends React.Component {
    constructor() {
        super();
        this.state = {
            month: [
                ' January ',
                ' February ',
                ' March ',
                ' April ',
                ' May ',
                ' June ',
                ' July ',
                ' August ',
                ' September ',
                ' October ',
                ' November ',
                ' December '
            ]
        }
    }

    nowDate() {
        const currentMonth = new Date();
        return this.state.month[currentMonth.getMonth()]
    }

    render() {
        return (
            <section className="card card__pay">
                <div className="container">
                    <div>
                        <h2 className="card__title">
                            No Payment Due
                        </h2>
                        <p className="card__available">
                            You’ve paid your
                            {this.nowDate()}
                            balance
                        </p>
                    </div>
                    <div className="card__inner">
                        <p className="card__icon">
                            <FontAwesomeIcon icon={faCheck}/>
                        </p>
                    </div>
                </div>
            </section>

        )
    }
}

export default NoPaymentDue;