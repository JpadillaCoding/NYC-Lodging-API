import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/parks&amenities',{ useNewUrlParser: true, useUnifiedTopology: true })

export default mongoose