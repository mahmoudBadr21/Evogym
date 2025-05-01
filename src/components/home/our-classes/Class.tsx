type Props = {
  title: string;
  description?: string;
  image: string;
}

const Class = ({ title, description, image}: Props) => {
  return (
    <li className="cla-card">
      <div className="overlayStyle">
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <img src={image} alt={`${image}`} />
    </li>
  )
}

export default Class