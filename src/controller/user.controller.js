import { log } from "winston";
import userService from "../service/user.service.js";
import { logger } from "../application/logging.js";

const register = async (req, res, next) => {
    try{
        const result = await userService.register(req.body);
        res.status(200).json({
            data: result
        })
    }catch(e){
        next(e);
    }
}

const login = async (req,res, next) => {
    try{
        const result = await userService.login(req.body);
         res.status(200).json({
            data: result
        })
    }catch(e){
        next(e);

    }
}

const getUser = async(req,res, next) => {
    try{

        const username = req.user.username;
        const result = await userService.getUser(username);
         res.status(200).json({
            data: result
        })
    }catch(e){
        next(e);

    }

}

const updateUser = async (req, res, next) => {
    try{
        const username = req.user.username;
        const request = req.body;
        request.username = username;

        const result = await userService.updateUser(request);
        res.status(200).json({
            data: result
        })
    }catch(e){
        next(e);
    }
}

// const deleteUser = async (req, res, next) => {
//     try{
//         const username = req.user.username;
//         const result = await userService.deleteUser(username);
//         res.status(200).json({
//             data: result
//         })
//     }catch(e){
//         next(e);
//     }
// }


export default{
    register,
    login,
    getUser,
    updateUser,
    
}