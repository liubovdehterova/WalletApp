import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { faCoffee, faStar, faHeart, faCheck, faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import TransactionSum from "./TransactionSum";
import TransactionDetail from "../../TransactionDetail";

class Transactions extends React.Component {
    constructor(props) {
        super(props);
    }
    getDayWordFromDate(dateString) {
        const parts = dateString.split('.');
        const day = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const year = parseInt(parts[2]);
        let dateObject = new Date(year, month - 1, day);

        if(dateObject.getDate() < new Date().getDate() - 6) {
            return dateObject.toLocaleDateString('en-US', {day: 'numeric', month: 'numeric', year: 'numeric' });
        } else {
            return dateObject.toLocaleDateString('en-US', { weekday: 'long' });
        }
    }
    getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    getRandomIcon(){
        const icons = [faCoffee, faStar, faHeart, faCheck, faAppleAlt];
        const randomIndex = Math.floor(Math.random() * icons.length);

        return icons[randomIndex];
    };
    handleTransactionClick() {
        // Виклик функції handleTransactionClick з властивостями елемента
        this.props.handleTransactionClick(this.props);
    }

    render() {
        const blockStyle = {
            backgroundColor: this.getRandomColor(),
        };
        const { date, sum, id } = this.props;
        const dayWord = this.getDayWordFromDate(date);
        return (
            <div className="transactions" onClick={() => this.handleTransactionClick()}>
                <div className="transactions__logo" style={blockStyle}>
                    <FontAwesomeIcon icon={this.getRandomIcon()} />
                </div>
                <div className="transactions__content">
                    <div className="transactions__content__inner">
                        <h3 className="transactions__content__inner__title">
                            {this.props.name}
                        </h3>
                        <div className="transactions__content__inner-balance">
                            <p className="transactions__content__inner__pay">
                                {this.props.name === 'Payment' ? '+' : ''}
                                {sum}
                            </p>
                            <button className="transactions__content__inner__btn">
                                <FontAwesomeIcon icon={faAngleRight} />
                            </button>
                        </div>
                    </div>
                    <div className="transactions__content__inner">
                        <div className="transactions__content__inner__description">
                            <p className="transactions__content__inner__description__item">
                                {this.props.pending === 'Pending' ? this.props.pending + ' - ' : ''}
                                Card Number Used
                            </p>
                            <p className="transactions__content__inner__description__item">
                                {this.props.nameUser ? this.props.nameUser + ' - ' : ''}
                                {dayWord}
                            </p>
                        </div>
                        <p className="transactions__content__inner__interest">
                            {this.props.prec}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Transactions;