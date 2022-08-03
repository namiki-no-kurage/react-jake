export const ColoredMessage = (props) => {
  const { color, message } = props

  const contentStyle = {
    color: color,
    fontSize: '20px'
  }

  return <p style={ contentStyle }>{ message }</p>
}
