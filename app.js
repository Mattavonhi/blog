//����expressģ��
var express = require('express');
//����ģ�崦��ģ��
var swig = require('swig');
//�������ݿ�ģ��
var mongoose = require('mongoose');
//����appӦ��  ==  nodejs��Http.createServer();
var app = express();
//����Ӧ��ģ��
    //���嵱ǰ��Ӧ�õ�ģ������
    //'html',ģ���������ƣ�ͬʱҲ��ģ���ļ��ĺ�׺
    app.engine('html',swig.renderFile);
    //����ģ���ļ���ŵ�Ŀ¼��
        // ��һ������������views��
        // �ڶ���������Ŀ¼
    app.set('views','./views');
    //ע����ʹ�õ�ģ�����棬
        // ��һ������������view engine,
        // �ڶ���������app.engine��������е�ģ����������ƣ���һ��ֵ����һ�µ�
    app.set('view engine','html');

    swig.setDefaults({
        //���������У�ȡ��ģ�建��
        cache:false
    });
//���þ�̬�ļ��й�
    //���û����ʵ�url��/public��ʼ����ôֱ�ӷ������Ӧ��__dirname + '/public'�µ��ļ�
//app.use('/public',express.static(__dirname + '/public'));

/*
*req:   request����
*res:   response����
* next: ����
* */
//app.get('/',function(req,res,next){
    //res.send('<h1>index</h1>')
/*
* ��ȡviewsĿ¼�µ�ָ���ļ������������ظ��ͻ���
* ��һ����������ʾģ����ļ��������viewsĿ¼
* �ڶ������������ݸ�ģ��ʹ�õ�����******************************************
* */
    //res.render('index')
//});

/*
* ���ݲ�ͬ���ܣ�����ģ��
*
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


//�������ݿ�
mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('err');
    }else{
        console.log('success');
        //��������
        app.listen(8081);
    }
});




//�û�����http�����url������·�ɡ��ҵ�ƥ��Ĺ����ִ��ָ���İ󶨺��������ض�Ӧ���ݵ��û�
// /public �� ��̬ �� ֱ�Ӷ�ȡָ��Ŀ¼�µ��ļ������ظ��û�
// �� ��̬ �� ����ҵ���߼�������ģ�壬����ģ�� �� �������ݸ��û�



