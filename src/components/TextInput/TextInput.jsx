import React from 'react'
import useStyles from './TextInput.css'

const TextInput = ({ textarea, value, onChange, placeholder = 'Search...', className, maxLength, style = {} }) => {
  const classes = useStyles()
  return textarea ? (
    <textarea
      value={value}
      className={`${classes.textInput} ${className}`}
      maxLength={maxLength}
      onChange={onChange}
      placeholder={placeholder}
      style={style}
    />
  ) : (
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
