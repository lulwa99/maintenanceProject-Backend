const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: String,
   
//     event: [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Event'
//     }],
//     image: String
// },
service: String,
User: String
},
{
    timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {Category};