import { Schema, model } from 'mongoose';
import * as bcrypt from "bcrypt";

const UserSchema = new Schema(
  {
    avatar: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }, 
},
{
  timetamps: true,
  versionKey: false,
}
);

export const UserModel = model('User', UserSchema);

import { Schema, model } from "mongoose";

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    image: {
        type: URL,
        required: true,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'comment',
        },
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export const PostModel = model('Post', PostSchema);

import { Schema, model } from "mongoose";

const CommentSchema = new Schema({
    text:{
        type: String,
        required: true,
    },
    posts:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false,
});

export const CommentModel = model('Comment', CommentSchema);