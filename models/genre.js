var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema (
    {
      name: {type: String, required: true, min: 3, max: 100},  
    }
);

// Virtual for the URL of the genre
GenreSchema
.virtual('url')
.get (function () {
   return 'catalog/genre/' + this._id; 
});

// Export model
module.exports = mongoose.model('Genre', GenreSchema);
