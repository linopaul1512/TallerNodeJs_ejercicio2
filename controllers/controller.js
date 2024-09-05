var products = []

//controllers/controller
exports.getProducts = (req, res) =>
{
    res.status(200).json(products)
}

exports.createProduct = (req, res) =>
{
    console.log("Cuerpo de petición: ", req.body)
    const {name, price, quantity } = req.body
    const product = {name, price, quantity }
    product.id = products.length + 1
    products.push(product)
    res.status(200).json("Product save!")
}



exports.getProduct = (req, res) =>
{
    console.log("Id: ", req.params.id)
    const product = products.find(t => t.id == req.params.id)
    if(product)
        res.status(200).json({product: product})
    else
        res.status(400).json({mensaje: "Product no encontrada"})
}

exports.updateProduct = (req, res) =>
{
    const product = products.find((t) => t.id == req.params.id);

    if(product){
        const { name, price, quantity } = req.body
        product.name = name;
        product.price = price;
        product.quantity = quantity;

        res.status(200).json({message: 'Product actually'})
    }
    else{
        res.status(400).send('Product is null')
    }
}
    
exports.deleteProduct = (req, res) =>
{
    var product = products.find((t) => t.id == req.params.id);

    if(product){
       products = products.filter(t => t.id != product.id);
        res.status(200).json({message: 'Productt delete'})
    }
    else{
        res.status(400).send('product not found')
    }
}

