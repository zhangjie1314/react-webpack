import React from 'react';

// 引用样式文件
require('less/content.less');

class Content extends React.Component {
    render(){
        return (
            <div className="content-box">
                {this.props.children}
            </div>
        );
    }
}

export default Content;