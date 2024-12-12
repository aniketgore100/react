const RestCard = ({cloudinaryImageId,name,cuisines,avgRating}) =>{
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;
    return (
        <div className="card">
            <img  src= {imageUrl}/ >
            <h2>{name}</h2>
            <h3>{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
        </div>
    );
}

export default RestCard;