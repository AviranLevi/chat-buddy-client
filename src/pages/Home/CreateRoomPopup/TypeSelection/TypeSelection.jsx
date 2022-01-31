import React from 'react'
import useStyles from './TypeSelection.css'
import Button from '../../../../components/Button'
import { roomTypes } from '../../../../consts'
import Title from '../../../../components/Title'

const TypeSelection = ({ type, setPrivate, setPublic }) => {
  const classes = useStyles()

  const selectedTypeStyle = {
    background: '#2056BD',
    color: '#fff',
  }

  return (
    <div className={classes.roomTypesSelection}>
      <Title title="Type:" />
      <div className={classes.roomTypes}>
        <Button
          title={roomTypes.private}
          className={classes.roomTypeBtn}
          onClick={setPrivate}
          style={type === roomTypes.private ? selectedTypeStyle : {}}
        />
        <Button
          title={roomTypes.public}
          className={classes.roomTypeBtn}
          onClick={setPublic}
          style={type === roomTypes.public ? selectedTypeStyle : {}}
        />
      </div>
    </div>
  )
}

export default TypeSelection
