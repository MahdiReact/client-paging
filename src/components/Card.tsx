import { Programmer } from "../model";

const Card: React.FC<Programmer> = ({
	email,
	imageUrl,
	mobile,
	name,
	skills,
}) => {
	return(
      <div className="card text-center border-0 shadow-lg">
         <div className="card-body">
            <img className="d-inline-block rounded-circle mb-3"
               src={imageUrl}
               alt={name}
               width="96"
               />
               <h6>{name}</h6>
               <p className="fs-sm text-muted">{skills}</p>
               <p className="fs-sm mt-3 mb-0 fw-bold">{mobile}</p>
               <p className="fs-sm fw-bold">{email}</p>               
         </div>
      </div>
   )
};

export default Card;
