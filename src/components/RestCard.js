const RestCard = ({image, name, cuisine, ratings}) =>{
    return (
        <div className="card">
            <img src= {image}/ >
            <h2>{name}</h2>
            <h3>{cuisine.join(" , ")}</h3>
            <h4>{ratings}</h4>
        </div>
    );
}

export default RestCard;