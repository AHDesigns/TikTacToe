import mongoose from 'mongoose';
import autoIncrement from 'mongodb-autoincrement';

export const schema = new mongoose.Schema({
    name: String,
});

schema.plugin(autoIncrement.mongoosePlugin);

schema.statics.getSomething = (callback) => {
    myModel.find().exec((err, docs) => {
        callback(err, docs);
    });
};

let scheme;

try {
    scheme = mongoose.model('myModel');
} catch (e) {
    scheme = mongoose.model('myModel', schema);
}

const myModel = scheme;

export default myModel;
