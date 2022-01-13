import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextInput from '../../../../components/TextInput'
import useStyles from './RoomSearch.css'

const RoomSearch = () => {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <div className={classes.roomsSearch}>
      <TextInput placeholder='Search...' className={classes.searchInput} />
      <div className={classes.roomSearchIcon}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </div>
    </div>
  )
}

export default RoomSearch
