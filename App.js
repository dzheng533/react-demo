import React , {Component} from 'react';
import { Layout, Row, Col ,Icon} from 'antd';
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom";
import LoginForm from './compoment/LoginForm';
import MainScreen from './compoment/MainScreen';
import { connect } from 'react-redux';
const { Header } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };

  render(){
    let CONST = this.props.const;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ background: '#fff', padding: 0 ,height:'60px' , lineHeight:'60px', textAlign:'left'}} >
          <Row className="App-header" >
            <Col span={23}><span style={{marginLeft:'10px'}}>{CONST.TITLE}</span></Col>
            <Col span={1} style={{textAlign:"right",paddingRight:'5px'}} > <Icon type="close" /></Col>
          </Row>
        </Header>
        <Router>
        <Switch>
            <Route exact path="/"  component={LoginForm} />
            <Route exact path="/login" component={LoginForm}/>
            <Route path="/report" component={MainScreen}/>
            <Route path="/index" component={MainScreen}/>
            <Redirect to="/" />
        </Switch>
        </Router>
      </Layout> 
    );
  }
}

const mapStateToProps = state => {
  return {
    const: state.g.const
  }
}

export default connect(mapStateToProps)(App);
