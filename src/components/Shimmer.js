const Shimmer = ({len}) => {
    console.log(len);
     
    return (
      <div className="shimmer-container">
        {Array(6).fill("").map((_, index) => (
          <div key={index} className="shimmer-card"></div>
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  