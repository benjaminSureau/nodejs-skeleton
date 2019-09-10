const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const objectsSchema = new mongoose.Schema({
    //.......
});

objectsSchema.statics.findOneByConversationId = function (conversationId, cb) {
    return this.findOne({ conversationId }, cb);
};

const Object = mongoose.model('Object', objectsSchema);

module.exports = Object;
