import parksModel from "../models/parksModel.js"

const parksController = {
    
    index: async (req, res) => {
        parksModel.find({})
        .then(parks => {
            res.json(parks)
        })
    }

}

export default parksController