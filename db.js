const userSetting = require('./mockData/userSetting'); 
const inventory = require('./mockData/inventory'); 
const invlocation = require('./mockData/invlocation'); 
const contact = require('./mockData/contact'); 
const contact10 = require('./mockData/contact10'); 
const deliveryAddr = require('./mockData/deliveryAddr'); 
const unit = require('./mockData/unit'); 
const unitType = require('./mockData/unitType'); 
const settAcct = require('./mockData/settAcct'); 
const assistType = require('./mockData/assistType'); 
const assist = require('./mockData/assist'); 
const assistSku = require('./mockData/assistSku'); 
const employee = require('./mockData/employee'); 
const index = require('./mockData/index'); 
const getRecentlyContact = require('./mockData/getRecentlyContact'); 
const invPu = require('./mockData/invPu'); 
const queryAllUser = require('./mockData/queryAllUser'); 
const areasData = require('./mockData/areasData'); 
const query = require('./mockData/query'); 


const db = {
    login: {"data": "1"},
    userSetting: userSetting,
    inventory: inventory,
    invlocation: invlocation,
    contact: contact,
    contact10: contact10,
    deliveryAddr: deliveryAddr,
    unit: unit,
    unitType: unitType,
    settAcct: settAcct,
    assistType: assistType,
    assist: assist,//供应商类别接口
    assistSku: assistSku,
    employee: employee,
    //首页接口
    index: index,
    //采购页接口
    getRecentlyContact: getRecentlyContact,
    invPu: invPu,
    queryAllUser: queryAllUser,
    areasData: areasData, //地址省市选择数据
    query: query //单个客户信息接口
}
module.exports = db
