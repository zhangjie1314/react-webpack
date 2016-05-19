import React from 'react';
import {Link} from 'react-router';

var imgs = require('img/user-photo.jpg');

class List extends React.Component {
    render() {
        return(
            <div className="list-box">
                <div className="page-title">
                    <ul className="keyword-box">
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                        <li className="kw-text">
                            <Link to="/seach/关键词">关键词1</Link>
                        </li>
                    </ul>
                    <div className="search">
                        <from>
                            <input type="search" placeholder="搜索"/>
                            <span>
                                <i className="icon-search"></i>
                            </span>
                        </from>
                    </div>
                </div>
                <div className="list-content">
                    <ul>
                        <li>
                            <div className="title">
                                <Link to="/list/1">item1</Link>
                            </div>
                            <div className="list-footer">
                                <a href="">阅读 100</a>
                                <a href=""> . 评论 100</a>
                                <a href=""> . 喜欢 100</a>
                            </div>
                            <div className="list-img">
                                <img src={imgs} alt="头像"/>
                            </div>
                        </li>
                        <li>
                            <div className="title">
                                <Link to="/list/1">item1</Link>
                            </div>
                            <div className="list-footer">
                                <a href="">阅读 100</a>
                                <a href=""> . 评论 100</a>
                                <a href=""> . 喜欢 100</a>
                            </div>
                            <div className="list-img">
                                <img src={imgs} alt="头像"/>
                            </div>
                        </li>
                    </ul>
                    <div className="load-more">
                        <button className="load-btn">点击加载更多</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default List;