import { Request, Response } from 'express';
import quizesModel from '../Models/quizes';

export const createQuiz = async (req :Request, res:Response) => {
    try {
      const newQuiz = new quizesModel(req.body);
      await newQuiz.save();
      res.status(201).json(newQuiz);
    } catch (error) {
      res.status(500).json({ message: 'Error creating announcement', error });
    }
  };

export const listQuizes = async (req :Request, res:Response) => {
    try {
      const quizes = await quizesModel.find();
      res.json(quizes);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving announcements', error });
    }
  };

export const updateQuiz = async (req :Request, res:Response) => {
    try {
      const id = req.params.id;
      const updatedQuiz = await quizesModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedQuiz) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.json(updatedQuiz);
    } catch (error) {
      res.status(500).json({ message: 'Error updating announcement', error });
    }
  };  


export const deleteQuiz = async (req :Request, res:Response) => {
    try {
      const id = req.params.id;
      const deletedQuiz = await quizesModel.findByIdAndDelete(id);
      if (!deletedQuiz) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.status(204).json({ message: 'Announcement deleted'});
    } catch (error) {
      res.status(500).json({ message: 'Error deleting announcement', error });
    }
  };