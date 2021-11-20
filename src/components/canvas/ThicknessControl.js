const LineWidthControl = ({
  submitWidth,
  onWidthChange,
  thicknessControl,
  eraserThicknessControl,
  eraserOn,
}) => {
  return (
    <form onSubmit={submitWidth}>
      <label htmlFor="line-width">Thickness</label>
      <input
        id="line-width"
        type="number"
        min="1"
        max="50"
        onChange={onWidthChange}
        value={eraserOn ? eraserThicknessControl : thicknessControl}
      />
    </form>
  )
}

export default LineWidthControl
