// 加载基础组件
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

//加载页面组件
import Header from 'comps/header';
import Footer from 'comps/footer';

// 加载路由文件
import Routers from 'config-path/router';

// 引用样式文件
require('less/app.less');

// 渲染页面
// 头部
render(
    <Routers />,
    document.getElementById('content')
);

// 底部
render(
    <Footer />,
    document.getElementById('footer')
);