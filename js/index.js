import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Components
import Navbar from './components/navbar.js';
import TabsSimple from './components/tabs.js';


/*class Layout extends React.Component{
  render() {
    return (
      <Navbar/>
    );
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
*/

const Nav = () => (
  <MuiThemeProvider>
    <Navbar/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Nav/>,
  document.getElementById('nav'),
);


const Tabs = () => (
  <MuiThemeProvider>
    <TabsSimple/>
  </MuiThemeProvider>
);

ReactDOM.render(
  <Tabs/>,
  document.getElementById('tabs'),
);
