const mongoose = require('mongoose');

const rtDocSchema = mongoose.Schema({
    abstract: String,
    agencyAcronym: String,
    agencyName: String,
    allowLateComment: Boolean,
    attachmentCount: Number,
    attachments: Array, 
    cfr: String,
    comment: String,
    commentDueDate: Date,
    commentStartDate: Date,
    docketId: String,
    docketType: String,
    documentId: String,
    documentStatus: String,
    documentSubtype: String,
    documentType: String,
    effectiveDate: Date,
    federalRegisterNumber: String,
    fileFormats: Array, 
    openForComment: Boolean,
    pageCount: Number,  
    postedDate: Date, 
    receivedDate: Date, 
    rin: String, 
    startEndPage: String,
    title: String,
});

module.exports = mongoose.model('rtDocs', rtDocSchema);


