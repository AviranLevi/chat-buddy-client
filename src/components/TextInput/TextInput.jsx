import React from 'react'
import useStyles from './TextInput.css'

const TextInput = ({ value, onChange, placeholder = 'Search...', className, maxLength = 99, style = {} }) => {
  const classes = useStyles()
  return (
    <input
      value={value}
      className={`${classes.textInput} ${className}`}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  )
}

export default TextInput
