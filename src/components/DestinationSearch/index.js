import './index.css'

const DestinationSearch = props => {
  const {places} = props
  const {name, imgUrl} = places

  return (
    <li className="list-item">
      <img src={imgUrl} className="img" alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationSearch
