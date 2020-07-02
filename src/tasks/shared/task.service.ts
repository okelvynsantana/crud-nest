import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Task } from './task';
import { Model } from 'mongoose';

@Injectable()
export class TaskService {

  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAll(): Promise<Task[]>{
    return await this.taskModel.find().exec();
  }

  async getById(id: string): Promise<Task>{
    const task = await this.taskModel.findById(id).exec();
    return task
  }

  async create(task: Task): Promise<Task> {
    const createdTask = new this.taskModel  (task)

    return createdTask.save()
  }
  async update(id: string, task: Task): Promise<Task> {
    await this.taskModel.updateOne({ _id: id }, task).exec()

    return this.getById(id)
  }

  async delete(id: string): Promise<void> {
     await this.taskModel.deleteOne({_id: id}).exec()
  }


}
