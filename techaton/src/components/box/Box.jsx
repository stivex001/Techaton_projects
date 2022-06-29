import "./Box.css"

const Box = ({ header, text1, text2, border, width }) => {
  return (
    <div className="box " style={{
      border: border,
      width: width || '100%'
      }}>
        <h1 className="box-title">{header}</h1>
        <p>{text1}</p>
        <p>{text2}</p>
    </div>
  )
}

export default Box