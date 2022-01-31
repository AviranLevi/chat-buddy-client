import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextInput from '../../../../components/TextInput'
import useStyles from './RoomSearch.css'
import * as actions from '../../../../stores/actions'

const RoomSearch = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { features } = useSelector((state) => state)
  const { roomSearchValue } = features

  const searchOnChange = (e) => dispatch(actions.roomSearchOnChange(e.target.value))

  useEffect(() => {
    setTimeout(() => {
      dispatch(actions.searchRoom(roomSearchValue))
    }, 500)
  }, [roomSearchValue])

  return (
    <div className={classes.roomsSearch}>
      <TextInput
        value={roomSearchValue}
        placeholder="Search..."
        className={classes.searchInput}
        onChange={searchOnChange}
      />

      <div className={classes.roomSearchIcon}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default RoomSearch
