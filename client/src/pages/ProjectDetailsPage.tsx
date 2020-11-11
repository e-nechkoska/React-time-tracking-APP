import React, { useEffect, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { TimeComponent, AddTimeForm } from "../components";
import { Project, Time } from "../models";


type Props = RouteChildrenProps<{projectId: string}>;

export const ProjectDetailsPage = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState<Project>({id: "", name: "", description: "", times: []});
  const [hours, setHours] = useState(0);
  const projectId = props.match?.params.projectId;

  useEffect(() => {
    setLoading(true);

    fetch(`/projects/${projectId}`)
      .then(res => res.json())
      .then((project: Project) => {
        setProject(project);
        setLoading(false);
      });
  }, [projectId]);

  useEffect(() => {
    let sum = 0;
    project.times?.forEach(time => sum += time.amount);
    // let sum = project.times?.reduce((sum, time) => sum + time.amount, 0);
    setHours(sum);
  }, [project]);

  // const sum = project.times?.reduce((sum, time) => sum + time.amount, 0);

  const addTime = (description: string, amount: number) => {
    const newTime = {description: description, amount: amount};
    fetch(`/projects/${projectId}/times`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newTime)
    }).then(res => res.json())
    .then((newTime: Time) => {
      setProject({...project, times: [...project.times, newTime]});
    })
  }

  const deleteTime = (timeId: string) => {
    fetch(`/projects/${projectId}/times/${timeId}`, {
      method: "DELETE"
    }).then(() => {
      const remainingTimes = project.times.filter((time) => time.id !== timeId);
      setProject({...project, times: remainingTimes});
    });
  }

  return (
    <div>
    <table>
      <tr className="header">
        <td colSpan={3}>PROJECT</td>
      </tr>
      <tr>
        <th>Project name</th>
        <th>Description</th>
        <th>Total hours</th>
      </tr>
      <tr>
        <td>{project.name}</td>
        <td>{project.description}</td>
        <td>{ loading ? <span>Loading...</span> : <span>{hours}</span> }</td>
      </tr>
      
      {
        project.times.length > 0 ?
        <>
          <tr><td colSpan={3}>&nbsp;</td></tr>
          <tr className="header">
          <td colSpan={3}>TIMES</td>
          </tr>
          <tr>
            <th>Description</th>
            <th>Minutes</th>
            <th>Action</th>
          </tr>
            {project.times?.map(time => (
              <TimeComponent key={time.id} description={time.description} amount={time.amount} id={time.id} deleteTime={deleteTime} />
            ))}
        </>
        : null
      }
    </table>
    <AddTimeForm addTime={addTime} />
    </div>
  )
}
