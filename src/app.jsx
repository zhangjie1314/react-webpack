// 加载基础组件
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
//加载页面组件
import Footer from './companies/footer'

// 加载路由文件
import Routers from './config/router'

// 引用样式文件
require('../less/app.less')

// 渲染页面
// 头部
ReactDOM.render(
    <Routers />,
    document.getElementById('content')
)
