class Crud {

  constructor(tabela) {
    this._table = tabela
  }

  insert(data) {
    return global.mongodb.collection(this._table).insertOne(data) 
  }

  update() {
  }

  find(filter) {
    if (filter)
      return global.mongodb.collection(this._table).findOne(filter).toArray()
  
    return global.mongodb.collection(this._table).find().toArray()
  }

  remove(data) {
    global.mongodb.collection(this._table).deleteOne(data)
  }
}

module.exports = Crud