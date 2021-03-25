import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ProjectDetail() {
  const [claps, setClaps] = useState(0);
  const [project, setProject] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const params = useParams();
  console.log(params);

  const id = params.id;

  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then((r) => r.json())
      .then((project) => {
        setProject(project);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h2>Loading...</h2>;

  const { image, name, about, link, phase, users } = project;

  function handleClapClick() {
    setClaps(claps + 1);
  }

  return (
    <section>
      <div className="project-detail box">
        <div className="project-image">
          <img src={image} alt={name} />
          <button className="claps" onClick={handleClapClick}>
            👏{claps}
          </button>
        </div>
        <div className="details">
          <h2>{name}</h2>
          <p>{about}</p>
          {link ? (
            <p>
              <a target="_blank" rel="noreferrer" href={link}>
                Project Homepage
              </a>
            </p>
          ) : null}
          <div className="extra">
            <span className="badge blue">Phase {phase}</span>
          </div>
          <hr />
          <h3>Project Creators</h3>
          {users?.map((user, index) => (
            <div key={user.id}>
              <p>{user.name}</p>
              <p>{user.bio}</p>
              {user.linkedin ? (
                <p>
                  <a target="_blank" rel="noreferrer" href={user.linkedin}>
                    Linkedin
                  </a>
                </p>
              ) : null}
              {user.github ? (
                <p>
                  <a target="_blank" rel="noreferrer" href={user.github}>
                    Github
                  </a>
                </p>
              ) : null}
              {index < users.length - 1 ? <hr /> : null}
            </div>
          ))}
        </div>
      </div>
      <Link to={`/projects/${parseInt(id) + 1}`}>Next</Link>
    </section>
  );
}

export default ProjectDetail;
