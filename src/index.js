/*
* 入口文件
* */
import dva from 'dva';
import './index.css';
debugger
// 1. Initialize  创建应用，返回 dva 实例
const app = dva({
   initialState: {
     products: [
         { name: 'dva', id: 1 },
         { name: 'antd', id: 2 },
         { name: 'react', id: 3 },
       ],
     },
});

// 2. Plugins  配置 hooks 或者注册插件
// app.use({});

// 3. Model  注册 model
 app.model(require('./models/example').default);
 app.model(require('./models/products').default);

// 4. Router  注册路由表
app.router(require('./router').default);

// 5. Start   启动应用
app.start('#root');
