const { CityService } = require ('../services/index')




const CityService = new CityService();


const create = async (res,req)=>{
try {
    const city = await CityService.createCity(req.body)
    return req.status(200).json({
        data: city ,
        sucess: true,
        message: "sucessfully created a city",
        err: {}

    })
} catch (error) {
    console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        message: "not able to create a city",
        err: error
    })
}
}

// dlelete => 

const destroy = async (res,req)=>{
    try {
        const response = await CityService.deleteCity(req.params.id)
        return req.status(200).json({
            data: response ,
            sucess: true,
            message: "sucessfully deleted a city",
            err: {}
    
        })
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        message: "not able to delete a city",
        err: error
    })
    }
}




const get = async (res,req)=>{
    try {
        const response = await CityService.getCity(req.params.id)
        return req.status(200).json({
            data: response ,
            sucess: true,
            message: "sucessfully fetched a city",
            err: {}
    
        })
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        message: "not able to get a city",
        err: error
    })
    }
}




const update = async (res,req)=>{
    try {
        const response = await CityService.updateCity(req.params.id, req.body)
        return req.status(200).json({
            data: response ,
            sucess: true,
            message: "sucessfully fetched a city",
            err: {}
    
        })
    } catch (error) {
        console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        message: "not able to update a city",
        err: error
    })
    }
}





module.exports ={
    create,
    update,
    get,
    destroy
}