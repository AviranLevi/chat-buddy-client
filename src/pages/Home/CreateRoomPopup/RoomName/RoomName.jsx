import React from 'react'
import useStyles from './RoomName.css'
import Title from '../../../../components/Title'
import TextInput from '../../../../components/TextInput'
import ErrorMessage from '../../../../components/ErrorMessage'

const RoomName = ({ roomName, roomNameOnChange, err = false }) => {
  const classes = useStyles()

  return (
    <div className={classes.roomName}>
      <div className={classes.roomNameInputWrapper}>
        <Title title="Name:" />
        <TextInput
          className={classes.roomNameInput}
          value={roomName}
          onChange={roomNameOnChange}
          placeholder="*Name..."
        />
      </div>
      {err && <ErrorMessage message="*Chat name is required" />}
    </div>
  )
}

export default RoomName
