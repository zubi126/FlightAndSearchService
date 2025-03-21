const { CityService } = require ('../services/index')




const cityService = new CityService();


// create

const create = async (req,res)=>{
try {
    const city = await cityService.createCity(req.body)
    return  res.status(201).json({
        data: city,
        success: true,
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

const destroy = async (req,res)=>{
    try {
        const response = await cityService.deleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
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




const get = async (req,res)=>{
    try {
        const response = await cityService.getCity(req.params.id)
        return res.status(200).json({
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




const update = async (req,res)=>{
    try {
        const response = await cityService.updateCity(req.params.id, req.body)
        return res.status(200).json({
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

const getAll = async (req,res)=>{

try {
    const cities = await cityService.getAllCities(req.query);
    return res.status(200).json({
        data: cities ,
        sucess: true,
        message: "sucessfully fetched all cities",
        err: {}

    })


} catch (error) {
    console.log(error);
    return res.status(500).json({
        data:{},
        sucess:false,
        message: "not able to fetch the cities cities",
        err: error
    })
}





}



module.exports ={
    create,
    update,
    get,
    destroy,
    getAll
}