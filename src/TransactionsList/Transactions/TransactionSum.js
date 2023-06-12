import React from "react";

class TransactionSum extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <span>
                { this.props.sumElem }
            </span>
        )
    }
}

export default TransactionSum;