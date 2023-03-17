// const stripe = require('stripe')('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');
const stripe = require('stripe')('sk_test_51MiJLISGFdXiDdCYguaI0zcO6jrZl57oqTrHvJp1noXxE6bBDQl8Jeq2DxHK90bZHDMSmjQfU4byPZdxGbAgZqBq00Kcs4NEME');
const getRandomUuid = require('../utils/generateUuid')

const checkoutProduct = async (req, res) => {
    console.log("This is the request", req.body);

    let error, status;
    
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email, 
            source: token.id,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    state: token.card.address_state,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            }
        });

        const key = getRandomUuid();

        const charge = await stripe.charges.create({
            amount: product.price, 
            currency: "usd", 
            customer: customer.id, 
            description: product.description,
            receipt_email: token.email,
            shipping: {
                name: token.card.name,
                address: {
                    line1: token.card.address_line1,
                    line2: token.card.address_line2,
                    city: token.card.address_city,
                    state: token.card.address_state,
                    country: token.card.address_country,
                    postal_code: token.card.address_zip,
                }
            },
            // metadata: {
            //     order_id: key
            // }
        }, {
            idempotencyKey: key
        });

        console.log(charge);
        console.log("Success!");
    } catch (error) {
        console.log("Errro occured", error);
        // res.sendStatus(500).json({"message": "Internal server error"});
    }

    // res.status(200).json({"data": "Sample response"});  
}

module.exports = { checkoutProduct };