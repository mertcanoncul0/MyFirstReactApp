export const Categories = ({ products }) => {
  return (
    products.map(x => (
     <option key={x} value={x}>{x}</option>
    ))
  )
}