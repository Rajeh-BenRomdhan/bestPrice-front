import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "../components/SkillCard";

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
          <SkillCard key={tech.id} tech={tech} />
        ))
      }
    </div>
  );
}

export default Skills;