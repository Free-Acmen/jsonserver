module.exports = {
    "/basedata/userSetting?action=list": "/userSetting", 
    "/basedata/inventory?action=list&isDelete=2": "/inventory", 
    "/basedata/inventory?action=list&isDelete=2&rows=5000": "/inventory", 
    "/basedata/inventory?action=list": "/inventory", 
    "/basedata/invlocation?action=list&isDelete=2": "/invlocation", 
    "/basedata/contact?action=list&simple=1&isDelete=2&rows=5000": "/contact", 
    "/basedata/contact?action=list&simple=1&type=10&isDelete=2&rows=5000": "/contact10", 
    "/basedata/deliveryAddr?action=list&isDelete=2&rows=5000": "/deliveryAddr", 
    "/basedata/unit?action=list&isDelete=2": "/unit", 
    "/basedata/unitType?action=list": "/unitType", 
    "/basedata/settAcct?action=list&isDelete=2": "/settAcct", 
    "/basedata/assistType?action=list": "/assistType", 
    "/basedata/assist?action=list&typeNumber=PayMethod&isDelete=2": "/assist", 
    "/basedata/assist?action=list&isDelete=2": "/assist", 
    "/basedata/assistSku?action=list": "/assistSku", 
    "/basedata/employee?action=list&isDelete=2": "/employee", 
    "/report/index?action=getInvData&finishDate=2020-03-15&beginDate=2020-03-01&endDate=2020-03-15": "/index", 
    "/basedata/contact/getRecentlyContact": "/getRecentlyContact", 
    "/scm/invPu?action=list": "/invPu"

//     "/:resource/:id/show": "/:resource/:id",    //    /data1/001/show ==> /data1/001
//     "/data1/:name": "/data1?name=:name",    //    /data1/Sherry ==> /data1?name=Sherry
//     "/:anyArray\\?id=:id": "/:anyArray/:id"                     //    /data1?id=002 ==> /data/002 
}