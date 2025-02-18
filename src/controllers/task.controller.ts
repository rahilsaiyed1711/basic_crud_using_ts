import  { Request, Response } from 'express';
import Task from '../models/db.model';

export const createTask = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  console.log('Received data:', req.body);
  try {
    const newTask = await Task.create({ title, content });
    res.status(200).json(newTask);
  } catch (err) {
    console.error('Error creating task:', err);
    res.status(400).json(err);
  }
};

export const getTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const allData = await Task.find();
    res.render("allTasks", { tasks: allData });
  } catch (err) {
    console.error('Error fetching tasks:', err);
    res.status(500).json({ msg: 'Error fetching tasks' });
  }
};

export const updateTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const updateTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateTask) res.status(400).json({ msg: 'data not found' });
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json({ err });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) res.status(400).json({ msg: 'Task not found' });
    res.status(200).json({ msg: 'task deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

//geting tasks bu id only i.e. read opration using id

export const readById = async (req: Request, res: Response): Promise<void> => {
  try {
    const task = await Task.findById(req.params.id, req.body);
    if (!task) res.status(400).json({ msg: 'Task not found' });
    res.send(task);
  } catch (err) {}
};
