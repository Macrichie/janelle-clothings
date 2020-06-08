import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51GrnGeLwZnHadVpiKUjdleZVUBbUfxcyahn8P2opMWYVYzTDgp2yXnIBpSjZewwjDBbVnPUWte1kt9LM1s8Bneov00I3YiA949"
    
    const onToken = (token) => {
        console.log(token)
        alert('Payment is Successful')
    }
    return (
        <StripeCheckout
            label='Pay Now'
            name='Janelle Clothings Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
