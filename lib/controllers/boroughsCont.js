import boroughsModel from "../models/boroughsModel.js";

const boroughController = {
    
    index: async (req, res) => {
        const boroughs = await boroughsModel.find({})
        const boroughData = boroughs.map( currBorough => ({
            id: currBorough._id,
            borough: currBorough.borough
        }))
        res.json(boroughData)
    },
    borough: (req, res) => {
        boroughsModel.findById(req.params.id)
        .then(borough => {
            res.json(borough);
        });
    },

};

export default boroughController;