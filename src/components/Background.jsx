export const Background = ({ qty = 10 }) => {
  const liArray = Array.from({ length: qty }, (_, index) => index + 1)
  return (
    <ul className="background">
      {liArray.map((li, index) => (
        <li key={index}></li>
      ))}
    </ul>
  )
}
