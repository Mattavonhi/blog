/**
 * Created by admin on 2018/3/30.
 */
var mongoose = require('mongoose');
var usersSchema = require('../schema/users');
//ģ����Ĵ���
modules.exports =  mongoose.model('User',usersSchema );
