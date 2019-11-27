class Crud {

  constructor(tabela) {
    this._table = tabela
  }

  insert(data) {
    return global.mongodb.collection(this._table).insertOne(data) 
  }

  update(key, data) {
    return global.mongodb.collection(this._table).updateOne({[key]: data[key]}, { $set: data}) 
  }

  find(filter) {
    if (filter)
      return global.mongodb.collection(this._table).find(filter).toArray()
  
    return global.mongodb.collection(this._table).find().toArray()
  }

  findOne(filter) {
    return global.mongodb.collection(this._table).findOne(filter)
  }

  remove(data) {
    global.mongodb.collection(this._table).deleteOne(data)
  }
}

module.exports = Crud