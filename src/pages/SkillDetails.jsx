import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SkillDetails = () => {
  const params = useParams()
  console.log(params)

  const [technologies, setTechnologies] = useState([])
  const [technology, setTechnology] = useState(null);

  useEffect(() => {
    axios.get("https://devmastery-assets.vercel.app/technologies.json")
      .then(response => {
        const Gaming = response.data;
        console.log(Gaming)
        setTechnologies(Gaming)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    const firstTech = technologies.find(tech => tech.id === params.id)
    console.log(firstTech)
    setTechnology(firstTech)
  }, [technologies, params.id])

  console.log(technology)

  return (
    <div className="container mt-5 text-center" style={{width: "400px"}}>
      <h1>{technology && technology.name}</h1>
      <img src={technology && technology.image} style={{ width: 150 }} alt="skill logo" />
      <p>{technology && technology.description}</p>
    </div>
  );
}

export default SkillDetails;