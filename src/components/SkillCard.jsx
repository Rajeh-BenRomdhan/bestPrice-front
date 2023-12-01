import { Link } from "react-router-dom";

const SkillCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { tech } = props;

  return (<div className="col-lg-3 col-md-4 col-sm-6 p-3" >
    <div className="card p-3">
      <img src={tech.image} className="card-img-top" alt="card item" />
      <div className="card-body">
        <h5 className="card-title">{tech.name}</h5>
        <Link to={"/Gaming/" + tech.id} className="btn btn-primary">Go somewhere</Link>
      </div>
    </div>
  </div>);
}

export default SkillCard;