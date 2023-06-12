import React from "react";
import './App.css';
import CardBalanc from "./TransactionsList/CardBalanc";
import DailyPoints from "./TransactionsList/DailyPoints";
import NoPaymentDue from "./TransactionsList/NoPaymentDue";
import LatestTransactionTitle from "./TransactionsList/LatestTransactionTitle";
import Transactions from "./TransactionsList/Transactions";
import TransactionDetail from "./TransactionDetail";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTransaction: null
        };
        this.handleTransactionClick = this.handleTransactionClick.bind(this);
    }

    handleTransactionClick(transactionProps) {
        this.setState({ selectedTransaction: transactionProps });
    }

    render() {
        const { selectedTransaction } = this.state;
        const transactions = [
            {
                id: "1",
                type: "Payment",
                name: "Payment",
                sum: "$14.06",
                pending: "Pending",
                nameUser: "",
                date: "12.06.2023",
                prec: "3%"
            },
            {
                id: "2",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "11.06.2023",
                prec: "5%"
            },
            {
                id: "3",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "10.06.2023",
                prec: "5%"
            },
            {
                id: "4",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "09.06.2023",
                prec: "5%"
            },
            {
                id: "5",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "08.06.2023",
                prec: "5%"
            },
            {
                id: "6",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "07.06.2023",
                prec: "5%"
            },
            {
                id: "7",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "06.06.2023",
                prec: "5%"
            },
            {
                id: "8",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "05.06.2023",
                prec: "5%"
            },
            {
                id: "9",
                type: "Other",
                name: "Other Transaction",
                sum: "$25.00",
                pending: "Completed",
                nameUser: "John Doe",
                date: "04.06.2023",
                prec: "5%"
            }
        ];

        return (
            <div className="App">
                {selectedTransaction ? (
                    <TransactionDetail {...selectedTransaction} />
                ) : (
                    <div>
                        <div className="header">
                            <div className="header__l">
                                <CardBalanc balance="17.30" maxBalance="1500" />
                                <DailyPoints />
                            </div>
                            <NoPaymentDue />
                        </div>
                        <LatestTransactionTitle />

                        {transactions.map((transaction) => (
                            <Transactions
                                key={transaction.id}
                                {...transaction}
                                handleTransactionClick={this.handleTransactionClick}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }

}

export default App;
