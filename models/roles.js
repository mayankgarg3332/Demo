const mongoose = require('mongoose');

const PERMISSION_VALUES = ['user:read', 'user:write', 'user:delete', 'lead:read', 'lead:write', 'lead:delete']

const roleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    permissions: [{
        type: String,
        enum: PERMISSION_VALUES
    }]
}, {timestamps: true});

module.exports = mongoose.model('Role', roleSchema)