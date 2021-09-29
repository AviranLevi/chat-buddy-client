import React from 'react'
import Page from '../../components/Page'
import Title from '../../components/Title'
import useStyles from './Home.css'

const Home = () => {
  const classes = useStyles()

  return (
    <Page>
      <div className={classes.home}>
        <Title title='Home' fontSize='3rem' />
      </div>
    </Page>
  )
}

export default Home
