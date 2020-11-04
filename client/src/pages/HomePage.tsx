import React from "react";
import { TestComponent } from "../components";
import { Project } from "../models";

interface Props {}

interface State {
  projects: Project[];
}

export class HomePage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    // fetchAllProjects().then(projects => this.setState({projects: projects}));
  }

  render() {
    // this.state.projects...
    return <div><TestComponent /> Home Page...</div>;
  }
}
