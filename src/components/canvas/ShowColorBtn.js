export const ShowColorBtn = ({ onPickColor, showColorPicker }) => {
  return (
    <button onClick={onPickColor}>
      {showColorPicker ? 'Hide' : 'Pick'} color
    </button>
  )
}

export default ShowColorBtn
