module.exports = {
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_inventory()
            .then((products) => 
                res.status(200).send(products))
            .catch((err) =>  {
                res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
                console.log(err)
            })
},

    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, price, image_url } = req.body;

        dbInstance.create_product([ name, price, image_url ])
            .then(() => res.sendStatus(200))
            .catch((err) => {
                res.status(500).send({ errorMessage: 'Something went wrong!' });
                console.log(err);
    }); 
}}