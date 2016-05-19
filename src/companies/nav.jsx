import React from 'react';
import {Link} from 'react-router';
import Content from 'comps/content';

// 引用样式文件
require('less/nav.less');
require('css/font-awesome.min.css');

// 菜单导航文件
export default class App extends React.Component {
    render(){
        return (
            <div>
                <div className="nav-joey">
                    <div className="nav-top">
                        <Link to="/home" activeClassName="active">
                            <i className="icon-home"></i>
                            首页
                        </Link>
                        <Link to="/list" activeClassName="active">
                            <i className="icon-th-list"></i>
                            列表
                        </Link>
                    </div>
                    
                    <div className="nav-bot">
                        <Link to="/home" activeClassName="active">
                            <i className="icon-cog"></i>
                            设置
                        </Link>
                        <Link to="/list" activeClassName="active">
                            <i className="icon-user"></i>
                            登录
                        </Link>
                    </div>
                </div>
                <Content>
                    {this.props.children}
                </Content>
            </div>
        );
    }
}