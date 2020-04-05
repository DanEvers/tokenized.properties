module.exports = {
  getAllObjects: async (req, res, next) => {
    const db = req.app.get("db");
    db.get_AllObjects().then(objects => {
        res.status(200).send(objects)
    }).catch(err => console.log(err))
    },
    addNewObject: async (req, res) => {
      const db = req.app.get("db");
      const { img, address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, pricesqft, price, distribution } = req.body;
  
      const objects = await db.addNewObjects([img, address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, pricesqft, price, distribution]);
      res.status(200).send(objects);
    },
    // editObject: 

    deleteObject: async (req, res) => {
      const db = req.app.get("db");
      const { id } = req.params;
  
      const object = await db.deleteObject(id);
      res.status(200).send(object);
    }
  };