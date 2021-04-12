/**
 * Created by admin on 2018/3/30.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schema/users');
//模型类的创建
modules.exports =  mongoose.model('User',usersSchema );
