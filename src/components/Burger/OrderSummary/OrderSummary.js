import React from "react";
import Button from "../../UI/Button/Button";
import Aux from "../../../hoc/Auxillary";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with folowwing ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinueHandler}>CONTINUE</Button>
        </Aux>
    )
}

export default orderSummary