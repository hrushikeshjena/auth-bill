require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./router/authRoutes/users.js");
const authRoutes = require("./router/authRoutes/auth");
const passwordResetRoutes = require("./router/authRoutes/passwordReset.js");

//menu Items
const MenuItemsRouter = require("./router/AddMenuItems/menuItems-router.js");
const InventoryRouter = require("./router/Inventory/inventoryMaterials-router");

//Billing Dashboard Billing
const billingRouter = require("./router/BillingDashboard/Billing/billing-router");

const connectDb = require("./utils/database");
const bodyParser = require("body-parser"); // Require body-parser

// middlewares
app.use(express.json());
app.use(bodyParser.json());

//cors
app.use(cors());

app.use("/api/menu", MenuItemsRouter);
app.use("/api/inventory", InventoryRouter);

app.use("/api/billingpage", billingRouter);

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/password-reset", passwordResetRoutes);

const PORT = 8080;

connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
