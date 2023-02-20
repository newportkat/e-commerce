const products = require("./data/products").products
const categories = require("./data/categories").categories

//create express server
const express = require("express")
const app = express()
const port = 3000

//configure app to listen to port 3000
app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}/`)
})

//enable cors
const cors = require("cors")
app.use(cors())

//use body-parser middleware
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/categories", (req, res) => {
    res.send(categories)
})

app.get("/products", (req, res) => {
    res.send(products)
})

app.get("/product/:id", (req, res) => {
    const productId = req.params.id
    const product = products.find((product) => product.id === productId)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: "Product not found" })
    }
})
