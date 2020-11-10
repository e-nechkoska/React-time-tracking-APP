import React, { useEffect, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { TimeComponent } from "../components/TimeComponent";
import { AddTimeForm } from "../components/AddTimeForm";
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
      <div>{project.name}</div>
      <div>{project.description}</div>
      <ul>
        {project.times?.map(time => (
        <TimeComponent key={time.id} description={time.description} amount={time.amount} id={time.id} deleteTime={deleteTime} />
        ))}
      </ul>
      {
        !loading ? <div>Total hours: {hours}</div> : <div>Loading...</div>
      }
      <AddTimeForm addTime={addTime} />
    </div>
  )
  
}
