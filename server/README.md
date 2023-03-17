# ShopKGP

An internal refurbished products E-commerce platform for the KGP marketplace

[_Proposal Doc_](https://docs.google.com/document/u/1/d/e/2PACX-1vQftTkR1tceuR5cjrRzqeBRxNMfWdmwD96KW5BEiHcwL9htGD_1X6eNv6AU265OO0iG0GD4Z6Q_9XNu/pub)


├── server
│   ├── config
│   │   ├── database.js
│   │   ├── env.js
│   │   └── index.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── cartController.js
│   │   ├── checkoutController.js
│   │   ├── orderController.js
│   │   └── productController.js
│   ├── middleware
│   │   ├── authMiddleware.js
│   │   ├── errorHandlerMiddleware.js
│   │   └── validationMiddleware.js
│   ├── models
│   │   ├── cart.js
│   │   ├── order.js
│   │   └── product.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── checkoutRoutes.js
│   │   ├── orderRoutes.js
│   │   └── productRoutes.js
│   ├── services
│   │   ├── authService.js
│   │   ├── cartService.js
│   │   ├── checkoutService.js
│   │   ├── orderService.js
│   │   └── productService.js
│   ├── app.js
│   └── server.js
├── client
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── Cart
│   │   │   ├── Checkout
│   │   │   ├── Home
│   │   │   ├── Login
│   │   │   ├── Navbar
│   │   │   ├── Order
│   │   │   ├── Product
│   │   │   └── ...
│   │   ├── contexts
│   │   │   ├── AuthContext.js
│   │   │   ├── CartContext.js
│   │   │   ├── OrderContext.js
│   │   │   └── ProductContext.js
│   │   ├── hooks
│   │   ├── services
│   │   ├── styles
│   │   └── utils
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── webpack.config.js
└── README.md
