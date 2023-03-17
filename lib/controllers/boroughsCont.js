import boroughsModel from "../models/boroughsModel.js";

const boroughController = {
    
    index: (req, res) => {
        boroughsModel.find({})
            .then(borough => {
                res.json(borough)
            })
    }
}

export default boroughController