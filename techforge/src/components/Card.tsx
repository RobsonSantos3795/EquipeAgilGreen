interface CardProps {
  name: string,
  category: string,
  link: string,
  image: string
}


export function Card({name, category, link,image}:CardProps){
return(
  <div className="card">
    <img src={image} alt="Logo" />
    <div className="card-div" >
      <h2>{name}</h2>
      <p>{category}</p>
      <a href={link} target="_blank">Saiba Mais</a>
    </div>
  </div>
)
}