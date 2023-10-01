import axios from "axios";
import { useEffect, useState } from "react";

const Skills = () => {
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    axios.get("https://devmastery-assets.vercel.app/technologies.json")
      .then(response => {
        const skills = response.data;
        console.log(skills)
        setTechnologies(skills)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div className="row">
      {/* | | | | | | |     | | | | |
      | | | | | | |     | | | | | */}
      {
        technologies.map(tech => (
          <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={tech.id}>
            <div className="card p-3">
              <img src={tech.image} className="card-img-top" alt="card item" />
              <div className="card-body">
                <h5 className="card-title">{tech.name}</h5>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default Skills;