const User = require("./schema");
const NotFound = require('../../package/error/notFound')

exports.getAllData = async (query) => {
  const get = await User.find(query).lean();
  return get;
};

exports.saveData = async (body) => {
  const data = new User(body);
  const result = await data.save();
  return result;
};

exports.findById = async (id) => {
  const result = await User.findOne({_id: id}).lean()
  if(!result) throw new NotFound('user not found')
  return result;
};
  
exports.deleteById = async (id) => {
  const result = await User.findOneAndDelete({_id: id}).lean()
  if(!result) throw new NotFound('user not found')
  return result;
};
  
exports.update = async (id,body) => {
  const user = await User.findOne({_id: id}).lean()
  if(!user) throw new NotFound('user not found')
  const res = await User.findOneAndUpdate({_id: id}, body,  {returnDocument: 'after'})
  return res;
};