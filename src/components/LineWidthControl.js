const LineWidthControl = ({ submitWidth, handleWidthChange, lineWidth }) => {
  return (
    <form onSubmit={submitWidth}>
      <label htmlFor="line-width">Line width</label>
      <input
        id="line-width"
        type="number"
        min="1"
        max="50"
        onChange={handleWidthChange}
        value={lineWidth}
      />
    </form>
  )
}

export default LineWidthControl
