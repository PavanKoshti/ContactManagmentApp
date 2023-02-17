const asyncHandler = require("express-async-handler")

module.exports = {

//@desc Get All Contacts
//@routev GET /api/contacts
//@access public

 getContacts : asyncHandler(async (req,res) => {
     res.status(200).json({message:"Get All Contacts List"});
}),

//@desc Create New Contacts
//@routev POST /api/contacts
//@access public

 createContact : asyncHandler(async (req,res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All Field are Mandatory!")
    }
    res.status(201).json({message:"Create Contact"});
}),

//@desc Get Contact
//@routev GET /api/contacts/:id
//@access public

 getContact : asyncHandler(async (req,res) => {
    res.status(200).json({message:`Get Contact for ${req.params.id}`});
}),

//@desc Update Contact
//@routev PUT /api/contacts/:id
//@access public

 updateContact : asyncHandler(async (req,res) => {
    res.status(200).json({message:`Update Contact for ${req.params.id}`});
}),

//@desc Delete Contact
//@routev DELETE /api/contact/:id
//@access public

 deleteContact : asyncHandler(async (req,res) => {
    res.status(200).json({message:`Delete Contact for ${req.params.id}`});
})

// module.exports = {getContacts, createContact, getContact, updateContact, deleteContact}

}