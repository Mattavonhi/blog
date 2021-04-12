//加载express模块
var express = require('express');
//加载模板处理模块
var swig = require('swig');
//加载数据库模块
var mongoose = require('mongoose');
//创建app应用  ==  nodejs的Http.createServer();
var app = express();
//配置应用模板
    //定义当前所应用的模板引擎
    //'html',模板引擎名称，同时也是模板文件的后缀
    app.engine('html',swig.renderFile);
    //设置模板文件存放的目录，
        // 第一个参数必须是views，
        // 第二个参数是目录
    app.set('views','./views');
    //注册所使用的模板引擎，
        // 第一个参数必须是view engine,
        // 第二个参数和app.engine这个方法中的模板引擎的名称（第一个值）是一致的
    app.set('view engine','html');

    swig.setDefaults({
        //开发过程中，取消模板缓存
        cache:false
    });
//设置静态文件托管
    //当用户访问的url以/public开始，那么直接返回想对应的__dirname + '/public'下的文件
//app.use('/public',express.static(__dirname + '/public'));

/*
*req:   request对象
*res:   response对象
* next: 函数
* */
//app.get('/',function(req,res,next){
    //res.send('<h1>index</h1>')
/*
* 读取views目录下的指定文件，解析并返回给客户端
* 第一个参数：表示模板的文件，相对于views目录
* 第二个参数，传递给模板使用的数据******************************************
* */
    //res.render('index')
//});

/*
* 根据不同功能，划分模块
*
* */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));


//连接数据库
mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log('err');
    }else{
        console.log('success');
        //监听请求
        app.listen(8081);
    }
});




//用户发送http请求→url→解析路由→找到匹配的规则→执行指定的绑定函数，返回对应内容到用户
// /public → 静态 → 直接读取指定目录下的文件，返回给用户
// → 动态 → 处理业务逻辑，加载模板，解析模板 → 返回数据给用户



