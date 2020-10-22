

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
        }
    }).then((e) => {
        if (type == "lightBox") Checkout.showLightbox();
        else Checkout.showPaymentPage();
    });
}
async function fectchSessionInfo() {
    /*  fetch('https://ap-gateway.mastercard.com/api/nvp/version/57/')
         .then(response => response.json())
         .then(data => console.log(data)); */

    axios.post('https://ap-gateway.mastercard.com/api/rest/version/57/merchant/TESTMETLIFENI01/session', {
        "apiOperation": "CREATE_CHECKOUT_SESSION",
        "interaction": {
            "operation": "AUTHORIZE"
        },
        "order": {
            "amount": "120.0",
            "currency": "USD",
            "description": "Ordered goods",
            "id": "232E32323ddd"
        }
    },
        { crossDomain: true })
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}

//window.addEventListener('load', configureCheckout)
