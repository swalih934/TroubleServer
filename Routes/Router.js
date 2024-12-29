const express= require('express')
const userController=require('../Controllers/userControllers')
const GrievanceController=require('../Controllers/GrievanceController')
const jwtMidlleware = require('../Middlewares/jwtMiddleware')
const { getallGrievancesAdminController, updateReplyController, updateStatusController } = require('../Controllers/herosGrievanceController')
const { herologinController } = require('../Controllers/heroController')


const router = new express.Router()

router.post('/Register',userController.registerController)

// path for register : post request to http://localhost:3000/login
router.post('/login',userController.loginController)

// add Grievance:http://localhost:3000/add-grievance
router.post('/add-grievance',jwtMidlleware,GrievanceController.addGrievancesController)

// get users all grievance
router.get('/all-grievance', jwtMidlleware, GrievanceController.getallGrievancesController);

// get users resolved grievance
router.get('/resolved-grievance',jwtMidlleware,GrievanceController.getResolvedHistoryController);

// remove grievance:delete request to : http://localhost:3000/gid/remove-grievance
router.delete('/:gid/remove-grievance',jwtMidlleware,GrievanceController.removeGrievanceController)

// get all Grievances at admin page
router.get('/all-grievance-hero',getallGrievancesAdminController );

// update reply
router.put('/:gid/update-grievance',updateReplyController);

// update ststus
router.put('/:gid/update-status',updateStatusController);

// viewreply
router.get('/:gid/view-reply',jwtMidlleware,GrievanceController.viewReplyController)

// admin login
router.post('/login-admin',herologinController)


//update profile
router .put('/updateprofille',jwtMidlleware,userController.profileUpdate)



module.exports=router