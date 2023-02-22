const service = require("./service");

exports.getAllData = async (req, res) => {
  console.log(req.query)
  const final = await service.getAllData(req.query);
    return  res.status(200).json({
      code: 200,
      message: 'Success',
      status: true,
      data: final,
    });
};


exports.save = async (req, res) => {
    const final = await service.saveData(req.body);
    return res.status(200).json({
      code: 200,
      status: true,
      data: final,
      message: 'success',
    });
  };
  
exports.getById = async (req, res) => {
  const final = await service.findById(req.params.id);
  return res.status(200).json({
    code: 200,
    status: true,
    data: final,
    message: 'success',
  });
};

exports.update = async (req, res) => {
  const final = await service.update(req.params.id , req.body);
  return res.status(200).json({
    code: 200,
    status: true,
    data: final,
    message: 'success update',
  });
};

exports.delete = async (req, res) => {
  console.log('delete')
  const final = await service.deleteById(req.params.id);
  return res.status(200).json({
    code: 200,
    status: true,
    data: final,
    message: 'success delete',
  });
};
