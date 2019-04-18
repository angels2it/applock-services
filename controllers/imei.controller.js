const { Imei } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    let err, imei;

    let imeiInfo = req.body;


    [err, imei] = await to(Imei.create(imeiInfo));
    if(err) return ReE(res, err, 422);

    return ReS(res,imei.toJSON(), 201);
}
module.exports.create = create;