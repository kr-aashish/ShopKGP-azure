const devConfig = {
    apiEndpoints : {
        product: "http://localhost:4000/product/all",
        productById: (id) => `http://localhost:4000/product/get/${id}`,
        createProduct: "http://localhost:4000/product/create",
        user: "http://localhost:4000/user",
    }
}

export default devConfig;