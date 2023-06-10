import React from "react";
import {faAppleAlt} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class Transactions extends React.Component {
    render() {
        return (
            <div className="transactions">
                <div className="transactions__logo">
                    <FontAwesomeIcon icon={faAppleAlt} />
                </div>
                <div className="transactions__content">
                    <div className="transactions__content__inner">
                        <h3 className="transactions__content__inner__title">
                            Payment
                        </h3>
                        <div className="transactions__content__inner-balance">
                            <p className="transactions__content__inner__pay">
                                $14.06
                            </p>
                            <button className="transactions__content__inner__btn">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </div>
                    <div className="transactions__content__inner">
                        <div className="transactions__content__inner__description">
                            {/*Pending 50/50 зробити перевырку і вивести через props*/}
                            <p className="transactions__content__inner__description__item">
                                Pending - Card Number Used
                            </p>
                            <p className="transactions__content__inner__description__item">
                                Name - Date
                            </p>
                        </div>
                        <p className="transactions__content__inner__interest">
                            {/*Відсоток може бути різним виводимо через props*/}
                            3%
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Transactions;