/**
 * Created by admin on 2018/3/24.
 */
var mongoose = require('mongoose');

//�û��ı�ṹ
module.exports = new mongoose.Schema({
    //�û���
    username:String,
    //����
    password:String
});
