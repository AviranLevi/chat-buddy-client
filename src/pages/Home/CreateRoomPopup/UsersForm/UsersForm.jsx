import React from 'react'
import useStyles from './UsersForm.css'
import Title from '../../../../components/Title'
import TextInput from '../../../../components/TextInput'
import Button from '../../../../components/Button'
import Chip from '../../../../components/Chip'
import ErrorMessage from '../../../../components/ErrorMessage'

const UsersForm = ({ users, addUserValue, addUserOnChange, addToUsers, removeUserOnClick, usersValueErr }) => {
  const classes = useStyles()

  return (
    <div className={classes.roomUsers}>
      <div>
        <form className={classes.roomUsersForm} onSubmit={addToUsers}>
          <Title title="Invite:" />
          <TextInput
            className={classes.roomUsersInput}
            value={addUserValue}
            onChange={addUserOnChange}
            placeholder="Invite by email.."
          />
          <Button
            className={classes.addUserBtn}
            title={<i className="fa-solid fa-user-plus"></i>}
            onClick={addToUsers}
          />
        </form>
        {usersValueErr && <ErrorMessage message={'*Please insert valid email!'} />}
      </div>

      <div className={classes.inviteUsersDisplay}>
        {users.map((email, index) => index !== 0 && <Chip text={email} removeOnClick={removeUserOnClick} />)}
      </div>
    </div>
  )
}

export default UsersForm
