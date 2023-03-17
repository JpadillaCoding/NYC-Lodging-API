import parksModel from "../models/parksModel"

const parksController = {
    
    index: async (req, res) => {
        parksModel.find({})
        .then(parks => {
            res.json(parks)
        })
    }

}

export default parksController