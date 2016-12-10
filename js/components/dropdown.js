import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

/*import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
*/
const styles = {
  color: '#fff',
};

export default class DropDownMenuSimple extends React.Component {

  /*getChildContext() {
      return { muiTheme: getMuiTheme(baseTheme) };
  }*/

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div>
        <DropDownMenu underlineStyle={{display: 'none',}} className="dropdown" style={styles} value={this.state.value} onChange={this.handleChange}>
          <MenuItem value={1} primaryText="Paweł" />
          <MenuItem value={2} primaryText="Ustawienia" />
          <MenuItem value={3} primaryText="Wyloguj" />
        </DropDownMenu>
      </div>
    );
  }
}
/*
DropDownMenuSimple.childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
};*/
