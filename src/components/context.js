import React, { Component } from "react";
import img1 from "../assests/i2.jpg";
import img2 from "../assests/i11.jpg";
import img3 from "../assests/i4.jpg";
import img4 from "../assests/i5.jpg";
import img5 from "../assests/i3.jpg";
import img6 from "../assests/i6.jpg";
import img7 from "../assests/i10.jpg";
import img8 from "../assests/i8.jpg";
import img11 from "../assests/i9.jpg";
import img9 from "../assests/i9.jpg";
import img10 from "../assests/i12.jpg";
import axios from "axios";

const Context = React.createContext();
export class Provider extends Component {
  statechangehandler = (action, newObject) => {
    switch (action) {
      case "ADD_PROJECT":
        this.setState({
          projects: [newObject, ...this.state.projects],
        });
        break;
      case "ADD_RECOMMENDATION":
        this.setState({
          stacks: [newObject, ...this.state.stacks],
        });
    }
  };
  state = {
    statechangehandler: this.statechangehandler,
    stacks: [
      {
        id: 1,
        title:
          "She is such a sweetheart, so loving and I love her so much that I would like to spend my whole life with her.",
        excerpt: "ARYAN SINGH",
        company: "Boyfriend and wanna be husband",
      },
      {
        id: 2,
        title: "She is excellent in Review givings.",
        excerpt: "Random guy 2",
        company: "Director at ABC company",
      },
      {
        id: 3,
        title: "She has a great knowledge of fashon sense.",
        excerpt: "Random guy 3",
        company: "Manager at ABC company",
      },
      {
        id: 4,
        title: "She is a hardworking person with great passion for her job",
        excerpt: "Random guy 4",
        company: "Director at ABC company",
      },
    ],
    skills: [
      {
        id: 1,
        imageUrl: img4,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 2,
        imageUrl: img5,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 3,
        imageUrl: img6,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 4,
        imageUrl: img7,
        totalstars: 3,
        greystars: 3,
      },
      {
        id: 5,
        imageUrl: img8,
        totalstars: 3,
        greystars: 2,
      },
      {
        id: 6,
        imageUrl: img9,
        totalstars: 3,
        greystars: 2,
      },
      // {
      //   id: 7,
      //   imageUrl: img10,
      //   totalstars: 3,
      //   greystars: 3,
      // },
      // {
      //   id: 8,
      //   imageUrl: img11,
      //   totalstars: 3,
      //   greystars: 1,
      // },
    ],
    projects: [
      {
        id: 1,
        title: "Picture 1",
        imageurl: img1,

        body: "body1",
      },
      {
        id: 2,
        title: "Picture 2",
        imageurl: img2,

        body: "body1",
      },
      {
        id: 3,
        title: "Picture 3",
        imageurl: img3,

        body: "body1",
      },
      {
        id: 4,
        title: "Picture 4",
        imageurl: img10,

        body: "body1",
      },
    ],
  };
  // async componentDidMount() {
  //   const [
  //     responses_recommendations,
  //     responses_skills,
  //     responses_projects,
  //   ] = await Promise.all([
  //     axios.get("http://127.0.0.1:9000/api/recommendations"),
  //     axios.get("http://127.0.0.1:9000/api/skills"),
  //     axios.get("http://127.0.0.1:9000/api/projects"),
  //   ]);
  //   const newState = {};
  //   if (
  //     responses_recommendations.data.isSuccessful &&
  //     responses_recommendations.data.results.length != 0
  //   ) {
  //     newState.stacks = responses_recommendations.data.results;
  //   }
  //   if (
  //     responses_skills.data.isSuccessful &&
  //     responses_skills.data.results.length != 0
  //   ) {
  //     newState.skills = responses_skills.data.results;
  //   }
  //   if (
  //     responses_projects.data.isSuccessful &&
  //     responses_projects.data.results.length != 0
  //   ) {
  //     newState.projects = responses_projects.data.results;
  //   }
  //   this.setState(newState);
  // let responses = await axios.get(
  //   "http://127.0.0.1:9000/api/recommendations"
  // );
  // console.log(responses);
  // if (responses.data.isSuccessful) {
  //   this.setState({
  //     stacks: responses.data.results,
  //   });
  // }
  // responses = await axios.get("http://127.0.0.1:9000/api/skills");
  // console.log(responses);
  // if (responses.data.isSuccessful) {
  //   this.setState({
  //     skills: responses.data.results,
  //   });
  // }
  // responses = await axios.get("http://127.0.0.1:9000/api/projects");
  // console.log(responses);
  // if (responses.data.isSuccessful) {
  //   this.setState({
  //     projects: responses.data.results,
  //   });
  // }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
