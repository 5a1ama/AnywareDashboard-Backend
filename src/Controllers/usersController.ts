import { Request, Response } from 'express';
import users from '../Models/users';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export const register = async (req :Request, res:Response) => {
    try {
      const email = req.body.email;
      const oldUser = await users.find({email:email});

      if(oldUser.length==0)
        {
            const newUser = new users(req.body);
            await newUser.save();
            res.status(201).json(newUser);
        }
    else
        {
            res.status(400).json("User already exists")
        }
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  };


export const login = async (req :Request, res:Response) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const findUser = await users.find({email:req.body.email,password:password});

      if(findUser.length==0)
        {
            res.status(401).json("wrong username or password")
        }
    else
        {
            const newToken=jwt.sign({name:findUser[0].name,email:email,password:password},process.env.SECRET_KEY as any)
            res.status(201).json(newToken)
        }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };

export const verifyToken = async (req :Request, res:Response) => {
    try {
      const token = req.body.token
      const data=jwt.verify(token,process.env.SECRET_KEY as any)
      res.status(201).json(data)
    } catch (error) {
      res.status(500).json({ message: 'Error in token', error });
    }
  };