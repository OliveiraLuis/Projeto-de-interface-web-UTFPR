class Aviao {

  constructor() {
    this._table = "aviao"
  }

  insert(aviao) {
    return global.mongodb.collection(this._table).insertOne(aviao) 
  }

  update() {
  }

  find(filter) {
    if (filter)
      return global.mongodb.collection(this._table).findOne(filter).toArray()
  
    return global.mongodb.collection(this._table).find().toArray()
  }

  remove() {

  }
}

module.exports = Aviao