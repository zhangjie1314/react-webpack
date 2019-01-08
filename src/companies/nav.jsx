import React from 'react'
import { NavLink } from 'react-router-dom'

// 引用样式文件
import '../../less/nav.less'
import '../../css/font-awesome.min.css'

// 菜单导航文件
export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className='nav-joey'>
                    <div className='nav-top'>
                        <NavLink exact to='/' activeClassName='active'>
                            <i className='icon-home' />
                            首页
                        </NavLink>
                        <NavLink to='/special' activeClassName='active'>
                            <i className='icon-th-list' />
                            专题
                        </NavLink>
                    </div>

                    <div className='nav-bot'>
                        <NavLink to='/setting' activeClassName='active'>
                            <i className='icon-cog' />
                            设置
                        </NavLink>
                        <NavLink to='/login' activeClassName='active'>
                            <i className='icon-user' />
                            登录
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
