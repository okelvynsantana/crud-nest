import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.set('toJSON', {
  transform: function(doc, ret, opt) {
      delete ret['password']
      return ret
  }
})




