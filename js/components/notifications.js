import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const Notifications = () => (
  <div>
    <IconMenu className='notif'
      iconButtonElement={<i class="material-icons">notifications_none</i>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Nowa aplikacja" />
      <MenuItem primaryText="Nowa aplikacja" />
    </IconMenu>
  </div>
);

export default Notifications;
