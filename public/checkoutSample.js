

function errorCallback(error) {
    console.log(JSON.stringify(error));
}
function cancelCallback() {
    console.log('Payment cancelled');
}
function paymentSuccess() {
    alert("Payment is successfull")
}
function configureCheckout(sessionID, address, type) {
    Checkout.configure({
        session: {
            id: sessionID
        },
        interaction: {
            merchant: address
        },
        /*  locale: 'en_US', 
        theme: 'default',
        displayControl: {
            billingAddress: 'OPTIONAL',
            customerEmail: 'OPTIONAL',
            orderSummary: 'SHOW',
            shipping: 'HIDE'
        }*/
    });

    if (type == "lightBox")
        Checkout.showLightbox();
    else Checkout.showPaymentPage();
}
function fectchSessionInfo() {
    return new Promise(function (resolve, reject) {
        axios.post('https://ap-gateway.mastercard.com/api/rest/version/57/merchant/TESTMETLIFENI01/session', {
            "apiOperation": "CREATE_CHECKOUT_SESSION",
            "interaction": {
                "operation": "PURCHASE"
            },
            "order": {
                "amount": "120.0",
                "currency": "USD",
                "description": "Ordered goods",
                "id": "232E32323ddd"
            }
        },
            {
                headers: {
                    "Authorization": "Basic bWVyY2hhbnQuVEVTVE1FVExJRkVOSTAxOjRiM2Q5MjE1NDVlM2EyZThjOTMwYWI5MzczNDhhY2Yw",
                    "Content-Type": "application/json",
                }
            })
            .then(function (response) {
                return resolve(response);
            })
            .catch(function (error) {
                return resolve(error);
            });
    })
}

//window.addEventListener('load', configureCheckout)
