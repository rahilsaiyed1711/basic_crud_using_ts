import {Document} from 'mongoose';


export interface testTask extends Document{
    title: string;
    content: string;
    completed : boolean;
}