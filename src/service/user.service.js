import { prismaClient } from "../application/database.js";
import { getAllUserValidation, loginUserValidation, registerUserValidation, updateUserValidation } from "../validation/user.validation.js"
import { validate } from "../validation/validation.js"
import { ResponseError } from "../error/response.error.js";
import bcrypt from "bcrypt";
import {v4 as uuid } from "uuid";
import { logger } from "../application/logging.js";
import { log } from "winston";

const register = async (req) => {
    const user = validate(registerUserValidation, req);

    const countUser = await prismaClient.user.count({
        where: {
            username: user.username
        }
    }); 

    if (countUser === 1){
        throw new ResponseError(400, "Username already exits!")
    }
   
    user.password = await bcrypt.hash(user.password, 10);
    const result = await prismaClient.user.create({
        data: user,
        select: {
            username: true,
            name: true
        }
    })

    return result;
    
}

const login = async(req) => {
    const loginUser = validate(loginUserValidation, req);

    const user = await prismaClient.user.findUnique({
        where: {
            username: loginUser.username
        },
        select: {
            username: true,
            password: true
        }
    })

    if(!user){
        throw new ResponseError(401, "user/password wrong!")
    }

    const isPasswordValid = await bcrypt.compare(loginUser.password, user.password);

    if(!isPasswordValid){
        throw new ResponseError(401, "username/password wrong!")
    }

    const token = uuid().toString()
    const result = await prismaClient.user.update({
        data: {
            token
        },
        where:{
            username: user.username
        },
        select: {
            token: true
        }
    });

    return result;

}

const getUser = async (req) => {
    const user = validate(getAllUserValidation, req);

    const checkuser = await prismaClient.user.findUnique({
        where:{
            username: user
        },
        select:{
            username: true,
            name: true
        }
    })

    if(!checkuser){
        throw new ResponseError(404, "user is not found")
    }

    return checkuser;
}

const updateUser = async (req) => {
    const user = validate(updateUserValidation, req);

    const countUser = await prismaClient.user.count({
        where:{
            username: user.username
        }
    })

    if(countUser !==1){
        throw new ResponseError(404, "user is not found")
    }

    const data = {};
    if(user.name){
        data.name = user.name;
    }
    if(user.password){
        data.password = await bcrypt.hash(user.password, 10)
    }

    const result = await prismaClient.user.update({
        where:{
            username: user.username
        },
        data : data,
        select:{
            username: true,
            name: true
        }
    })

    return result;

}

// const deleteUser = async (req) => {
//     const user = validate(getAllUserValidation, req);

//     const countUser = await prismaClient.user.count({
//         where:{
//             username: user.username
//         }
//     })

//     if(countUser !== 1){
//         throw new ResponseError(401h)
//     }
// }

export default{
    register,
    login,
    getUser,
    updateUser,
    
}