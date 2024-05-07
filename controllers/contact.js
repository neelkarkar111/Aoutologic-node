var CONTACT = require('../models/contact')



// SignUp Page
exports.contactcreate = async function (req, res, next) {
    try {
        let formData = req.body

        formData.userID = req.userID

        let contactData = await (await CONTACT.create(formData))

        res.status(201).json({
            status: "success",
            message: "contact create  successfully",
            data: contactData
        })
    }
    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}


// ... / Page
exports.contactAlldata = async function (req, res, next) {
    try {
        let data = await CONTACT.find()
        res.status(201).json({
            status: "success",
            message: "contact all data successfully",
            data
        })
    }
    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }99
}

// ... / Page
exports.contactSingledata = async function (req, res, next) {
    try {
        let data = await CONTACT.findById(req.params.findId)
        res.status(201).json({
            status: "success",
            message: "contact One data successfully",
            data
        })
    }
    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }99
}

// Delete 
exports.contactDelete = async function (req, res, next) {
    try {
        let contactDelete = await CONTACT.findByIdAndDelete(req.params.deleteId)
        res.status(201).json({
            status: "success",
            message: "contact delete successfully",
            data: contactDelete
        })
    }
    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

// Update
exports.contactUpdate = async function (req, res, next) {
    try {
        let contactUpdate = await CONTACT.findByIdAndUpdate(req.params.UpdateId, req.body)
        res.status(201).json({
            status: "success",
            message: "contact update data successfully",
            data: contactUpdate
        })
    }
    catch (error) {
        res.status(404).json({
            status: "Fail",
            message: error.message
        })
    }
}

