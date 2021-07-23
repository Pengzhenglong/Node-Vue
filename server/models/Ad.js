const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String, },
  items: [{
    image: {},
    url: {}
  }
  ]
})

module.exports = mongoose.model('Ad', schema)