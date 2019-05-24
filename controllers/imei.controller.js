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

const isActive = async function(req, res){
    let err, imei;

    let id = req.params.id;


    [err, imei] = await to(Imei.findOne({ where: {code: id} }));
    if(err) return ReE(res, err, 422);

    if(!imei) return ReE(res, {code: 'not_found'}, 404);

    return ReS(res,imei.toJSON(), 201);
}
module.exports.isActive = isActive;

const checkAndAddImei = async function(req, res){
    let err, imei;

    let imeiInfo = req.body;

    [err, imei] = await to(Imei.findOne({ where: {code: imeiInfo.code} }));
    if(err) return ReE(res, err, 422);

    if(!imei) {
        return create(req, res);
    }

    return ReS(res, { data: imei.toJSON() }, 201);
}
module.exports.checkAndAddImei = checkAndAddImei;