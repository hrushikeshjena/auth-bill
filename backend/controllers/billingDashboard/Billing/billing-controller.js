const Billings = require("../../../models/BillingDashboard/Billing/billing-model");
const { format } = require("date-fns");
const currentDate = new Date();
const today = format(currentDate, "yyyy-MM-dd");

const billingData = async (req, res) => {
  try {
    console.log(req.body);
    const {
      customerName,
      grandTotal,
      mobileNumber,
      address,
      menuItemName,
      menuItemPrices,
      menuItemAmount,
      subTotal,
    } = req.body;
    const billingCreated = await Billings.create({
      customerName,
      mobileNumber,
      address,
      grandTotal,
      subTotal,
      menuItemName,
      menuItemPrices,
      menuItemAmount,
    });
    console.log("Bills added Successfully!", billingCreated);
    return res.status(200).json({
      message: "Bills added Successfully!",
      billing: billingCreated,
    });
  } catch (error) {
    console.error("Error adding bill:", error);
    return res.status(500).send("Internal Server Error");
  }
};

// Get All Items
const billingDataGet = async (req, res) => {
  try {
    const billings = await Billings.find();
    if (!Array.isArray(billings)) {
      throw new Error("Bills fetched are not an array");
    }
    console.log("Bills fetched Successfully!", billings);
    return res.status(200).json({
      message: "Bills fetched Successfully!",
      billing: billings,
    });
  } catch (error) {
    console.error("Error fetching Bills:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  billingDataGet,
  billingData,
};
