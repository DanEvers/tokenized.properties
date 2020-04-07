module.exports = {
  getAllObjects: async (req, res, next) => {
    const db = req.app.get("db");
    db.get_AllObjects()
      .then(objects => {
        res.status(200).send(objects);
      })
      .catch(err => console.log('getAllObjects err:', err));
  },
  getUserObjects: async (req, res, next) => {
    let {user_id} = req.params
    const db = req.app.get("db");
    db.get_UserObjects(user_id)
      .then(userObjects => {
        res.status(200).send(userObjects);
      })
      .catch(err => console.log('getUserObject err:', err));
  },
  addNewObject: async (req, res) => {
    const db = req.app.get("db");
    let {user_id} = req.params
    const { address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, } = req.body;
    db.add_NewObject( address, city, state, zip, description, yearbuilt, bedrooms, bathrooms, parking, heating, cooling, size, user_id).then(newObject => {
      res.status(200).send(newObject);
    })
    .catch(err => console.log('addNewObject err:', err));
  },
  // editObject2: async (req, res, next) => {
    //   const db = req.app.get('db');
    //   let {object_id} = req.params
    //   const { img } = req.body;
    //   await db.edit_Object2(img, object_id).then(object => {
      //     res.status(200).send(object)
      // })
      // },
      // editObject3: async (req, res, next) => {
        //   const db = req.app.get('db');
        //   let {object_id} = req.params
        //   const { price, distribution, } = req.body;
        //   let ipt = price / distribution
  //   let pricesqft = price / size
  //   await db.edit_Object3( pricesqft, price, distribution, ipt, object_id).then(object => {
  //     res.status(200).send(object)
  // })
  // },

  deleteObject: async (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    const object = await db.deleteObject(id);
    res.status(200).send(object);
  }
};
