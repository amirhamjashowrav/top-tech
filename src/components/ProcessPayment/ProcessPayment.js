import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardForm from './SplitCardForm';


const stripePromise = loadStripe('pk_test_51IeAJ1AXv88UOweYHImOMEr2XbpT1qxIhHPQFgFcF2bkFcinWKIIfmplfKVNnbh4mR7bEGJ4KQBLoR59KE5zdA6x00VE7FklNz');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
           <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
        </Elements>
    );
};

export default ProcessPayment;