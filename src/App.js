import './App.css';
import CardBalanc from "./CardBalanc";
import DailyPoints from "./DailyPoints";
import NoPaymentDue from "./NoPaymentDue";
import LatestTransactionTitle from "./LatestTransactionTitle";
import Transactions from "./Transactions";

function App() {
  return (
    <div className="App">
        <div className="header">
            <div className="header__l">
                <CardBalanc
                    balance = '17.30'
                    maxBalance = '1500'
                />
                <DailyPoints />
            </div>
            <NoPaymentDue />
        </div>
        <LatestTransactionTitle />
        <Transactions />
    </div>
  );
}

export default App;
