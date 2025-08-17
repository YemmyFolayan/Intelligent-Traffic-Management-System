import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Logo from './Logo';
import traffic_icon from '../../images/traffic_icon.png';
import accident_icon from '../../images/accident.png';
import stat_icon from '../../images/stat.png';
import fine_icon from '../../images/fine.png';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
  render() {
    return (
      <Layout.Sider style={{ 
        height: '100vh', 
        flex: '0 0 300px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between', // This pushes content to top and footer to bottom
        background: '#001529'

      }}>
        <div>
          <Logo />
          <Menu 
            theme="dark" 
            mode="inline" 
            defaultSelectedKeys={['1']}
            style={{ flex: 1 , background: '#001529', color: '#ffffff'}} // Menu takes available space
          >
            <Menu.Item key="1">
              <Link to="/">
                <img src={traffic_icon} style={styles.icon} />
                <span>Live Traffic</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/heatmap">
                <img src={accident_icon} style={styles.icon} />
                <span>Accident Mapping</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/stats">
                <img src={stat_icon} style={styles.icon} />
                <span>Statistics</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/fine">
                <img src={fine_icon} style={styles.icon} />
                <span>Fine</span>
              </Link>
            </Menu.Item>
          </Menu>
        </div>

      
      </Layout.Sider>
    );
  }
}

const styles = {
  icon: {
    width: 30,
    marginRight: 10,
    marginTop: 5,
    verticalAlign: 'top'
  },
  
};