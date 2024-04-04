const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://galihadityam1:GC1-Cluster@gc1-cluster.rsahnup.mongodb.net/?retryWrites=true&w=majority&appName=GC1-Cluster"
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})
const db = client.db('hck-68')

module.exports = {db}