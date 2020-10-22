function errorCallback(error) {
    console.log(JSON.stringify(error));
}
function cancelCallback() {
    console.log('Payment cancelled');
}
function paymentSuccess() {
    console.log("Payment is successfull")
}
function configureCheckout(sessionID, type) {
    Checkout.configure({
        session: {
            id: sessionID
        },
        interaction: {
            merchant: {
                name: 'Metlife Store',
                address: {
                    line1: '200 Sample St',
                    line2: '1234 Example Town'
                }
            },
            theme: 'default',
            displayControl: {
                billingAddress: 'OPTIONAL',
                orderSummary: 'SHOW',
                shipping: 'HIDE'
            }
        },

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
                "operation": "PURCHASE",
                "returnUrl": "http://localhost:3000/receipt"
            },
            "order": {
                "amount": "120.0",
                "currency": "USD",
                "description": "Ordered goods",
                "id": "232E32393d12"
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


