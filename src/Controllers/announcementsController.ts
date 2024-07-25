import { Request, Response } from 'express';
import announcementsModel from '../Models/announcements';


export const createAnnouncement = async (req :Request, res:Response) => {
    try {
      const newAnnouncement = new announcementsModel(req.body);
      await newAnnouncement.save();
      res.status(201).json(newAnnouncement);
    } catch (error) {
      res.status(500).json({ message: 'Error creating announcement', error });
    }
  };

export const listAnnouncements = async (req :Request, res:Response) => {
    try {
      const announcements = await announcementsModel.find();
      res.json(announcements);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving announcements', error });
    }
  };

export const updateAnnouncement = async (req :Request, res:Response) => {
    try {
      const id = req.params.id;
      const announcement = await announcementsModel.findByIdAndUpdate(id, req.body, { new: true });
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.json(announcement);
    } catch (error) {
      res.status(500).json({ message: 'Error updating announcement', error });
    }
  };

export const deleteAnnouncement = async (req :Request, res:Response) => {
    try {
      const id = req.params.id;
      const announcement = await announcementsModel.findByIdAndDelete(id);
      if (!announcement) {
        return res.status(404).json({ message: 'Announcement not found' });
      }
      res.status(204).json({ message: 'Announcement deleted'});
    } catch (error) {
      res.status(500).json({ message: 'Error deleting announcement', error });
    }
  };