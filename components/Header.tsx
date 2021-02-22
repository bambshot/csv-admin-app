import { AppBar, Toolbar, Typography } from '@material-ui/core'

const Header = () => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">CSV Admin App</Typography>
      </Toolbar>
    </AppBar>
  )
}

export default Header
