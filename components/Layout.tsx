import { ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import DrawerMenu from '~/components/DrawerMenu'

type LayoutProps = {
  children?: ReactNode
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  header: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerMenu: {
    flexShrink: 0
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}))

const Layout = ({ children }: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header />
      </div>
      <div className={classes.drawerMenu}>
        <DrawerMenu />
      </div>
      <div className={classes.content}>
        <Toolbar />
        {children}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
