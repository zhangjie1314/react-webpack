import React from 'react'
import { NavLink } from 'react-router-dom'

var imgs = require('../../images/user-photo.jpg')

class List extends React.Component {
    render() {
        return (
            <div className='list-box'>
                <div className='page-title'>
                    <ul className='keyword-box'>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键sadf</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                        <li className='kw-text'>
                            <NavLink to='/seach/关键词'>关键词1</NavLink>
                        </li>
                    </ul>
                    <div className='search'>
                        <form>
                            <input type='search' placeholder='搜索' />
                            <span>
                                <i className='icon-search' />
                            </span>
                        </form>
                    </div>
                </div>
                <div className='list-content'>
                    <ul>
                        <li>
                            <div className='title'>
                                <NavLink to='/list/1'>item1</NavLink>
                            </div>
                            <div className='list-footer'>
                                <a href=''>阅读 100</a>
                                <a href=''> . 评论 100</a>
                                <a href=''> . 喜欢 100</a>
                            </div>
                            <div className='list-img'>
                                <img src={imgs} alt='头像' />
                            </div>
                        </li>
                        <li>
                            <div className='title'>
                                <NavLink to='/list/1'>item1</NavLink>
                            </div>
                            <div className='list-footer'>
                                <a href=''>阅读 100</a>
                                <a href=''> . 评论 100</a>
                                <a href=''> . 喜欢 100</a>
                            </div>
                            <div className='list-img'>
                                <img src={imgs} alt='头像' />
                            </div>
                        </li>
                    </ul>
                    <div className='load-more'>
                        <button className='load-btn'>点击加载更多</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default List
