
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load local .env file for development
dotenv.config();

// Initialize Stripe with Firebase Config or .env
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY );
console.log(process.env.STRIPE_SECRET_KEY);


const app = express();
app.use(cors({origin: true}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.status(200).json({message: "Success!"});
});

// Stripe Payment Intent API
app.post("/payment/create", async (req, res) => {
  try {
    const total = Number(req.query.total);

    if (isNaN(total) || total <= 0) {
      return res.status(400).json({message: "Total must be greater than 0"});
    }

    const paymentIntents = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecrete: paymentIntents.client_secret,
    });
  } catch (error) {
    console.error("Stripe Payment Error:", error);
    res.status(500).json({error: error.message});
  }
});

app.listen(5001, (err) =>{
    if(err) throw new Error("Amazon Server Running on PORT: 5001, http://localhost:5001");
    
})

