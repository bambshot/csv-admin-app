import { makeStyles } from '@material-ui/core/styles'
import {
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import { Timelapse } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles(() => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth,
    boxSizing: 'border-box'
  },
  drawerContainer: {
    overflow: 'auto'
  }
}))

const DrawerMenu = () => {
  const classes = useStyles()

  return (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <List>
          {['メニューテスト'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Timelapse />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default DrawerMenu
