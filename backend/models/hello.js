let mongoose = require('mongoose');
let Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

let itemSchema = new Schema({
    item_title : String,
    item_image_url : String
}, {
    collection: 'item'
});

module.exports = mongoose.model('item', itemSchema);