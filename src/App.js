import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import { Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';
import LiveTraffic from './components/LiveTraffic/LiveTraffic';
import Simulate from './components/LiveTraffic/Simulate';
import AmbulanceTracker from './components/LiveTraffic/AmbulanceTracker';
import Heatmap from './components/LiveTraffic/Heatmap';
import Statistics from './components/LiveTraffic/Statistics';
import Fine from './components/Fine/Fine';

const { Header, Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <Layout style={{ flexDirection: 'row' }}>
        <Sidebar />
      
               
        <Layout>
          <Header
            style={{
              padding: '0 30px',
              color: 'white',
              fontSize: 20,
              fontWeight: 100,
              background: '#001529'
            }}
          >
            Dashboard
          </Header>
          <Content style={{ padding: 30 }}>
            <div style={styles.card}>
              <Switch>
                <Route path="/heatmap" component={Heatmap} />
                <Route path="/corridor" component={AmbulanceTracker} />
                <Route path="/stats" component={Statistics} />
                <Route path="/sim" component={Simulate} />
                <Route path="/fine" component={Fine} />
                <Route path="/" component={LiveTraffic} />
              </Switch>
            </div>
          </Content>
            <Footer>
               <div style={styles.footer}>
                  <a 
                    href="https://github.com/YemmyFolayan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit' }}
                  >
                    <Icon type="github" style={{ marginRight: 8 }} />
                    Folayan, Iluyemi Michael | © 2025
                  </a>
                </div>
            </Footer>
        </Layout>
        
      
      </Layout>
    );
  }
}

const styles = {
  card: {
    width: '100%',
    height: '82vh',
    background: 'white',
    boxShadow: '0px 2px 15px rgba(16, 11, 75, 0.2)',
    borderRadius: '3px'
  },
  footer: {
    width: '100%',
    padding: '16px 24px',
    color: '#001529',
    //background: '#001529',
    textAlign: 'center',
    borderTop: '1px solid rgba(12, 7, 42, 0.1)'
  }
};
export default App;
