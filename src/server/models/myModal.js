import mongoose from 'mongoose';
import autoIncrement from 'mongodb-autoincrement';

export const schema = new mongoose.Schema({
  name: String,
});

schema.plugin(autoIncrement.mongoosePlugin);

schema.statics.getSomething = (callback) => {
  MYMODEL.find().exec((err, docs) => {
    callback(err, docs);
  });
};

schema.statics.addstuff = (name, callback) => {
  MYMODEL.create({"_id": 0, "name": name}, (error, env) => {
    if (error) {
      callback('failed', null)
    } else {
      callback(null, name);
    }
  }
)}

let myModel;

try {
  myModel = mongoose.model('myModel');
} catch (e) {
  myModel = mongoose.model('myModel', schema);
}

const MYMODEL = myModel;

export default MYMODEL;
