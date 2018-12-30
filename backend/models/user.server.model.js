import mongoose from 'mongoose';

var validateEmail = function (email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(email)
};

var Schema = mongoose.Schema({
    firstName: {
        type: String,
        // default: "name",
        required: [true, 'User first name is required']
    },
    lastName: {
        type: String,
        // default: "last name",
        required: true},
    email: {
        type: String,
        // default: "www@gmail.com",
        // trim: true,
        // lowercase: true,
        // unique: true,
        // required: [true, 'User email number required'],
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // eventDate: {type: Date, default: Date.now}
    eventDate: {type: String}
}, {
    versionKey: false
});
export default mongoose.model('User', Schema);