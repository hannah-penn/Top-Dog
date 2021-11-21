import "./App.css";
import React, { Component } from "react";
import { Router } from "@reach/router";
import placeholder_dog from "./placeholder_dog.jpg";
import ChangeColorButton from "./ChangeColorButton";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import DogPage from "./DogPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: "",
      showSubmissionForm: true,
      showDogs: true,
      selectedDog: null,
      dogList: [
        {
          name: "Rex",
          breed: "Rottweiler",
          url: "https://cdn.petpress.net/wp-content/uploads/2019/10/12222841/Rottweiler8-.jpg",
          bio: "Rex loves to get muddy and eat literal garbage. His favourite places to go are the beach, the park, and any dumpster behind a restaurant. He is wonderful with children, though does slobber a lot.",
          extraphotos: [
            {
              id: 1,
              url: "https://www.bil-jac.com/media/nhyd0qet/rottweiler-868607572.jpg",
            },
            {
              id: 2,
              url: "http://3.bp.blogspot.com/-ZXixpl4wbCE/UIXNI2jDBfI/AAAAAAAABDY/H8l5InQBgHI/s1600/Rottweiler-Puppy-Picture.JPG",
            },
            {
              id: 3,
              url: "https://petplaceimages-embracepetinsura1.netdna-ssl.com/wp-content/uploads/2018/03/Rottweiler.jpg?x32814",
            },
            {
              id: 4,
              url: "https://allhdwallpapers.com/wp-content/uploads/2016/07/Rottweiler-1-2.jpg",
            },
          ],
        },
        {
          name: "Wally",
          breed: "Wolfhound",
          url: "https://i.pinimg.com/originals/77/9c/ec/779cec6e3a9230a8284e1087e80a3832.jpg",
          bio: "Wally is fast as a bullet, and loves to run. He enjoys being around other animals, especially those of a farmyard persuasion. His favourite food is Welsh rarebit. He loves the rain and shakes it off all over anyone nearby.",
          extraphotos: [
            {
              id: 1,
              url: "https://www.petpaw.com.au/wp-content/uploads/2014/06/Irish-Wolfhound-11.jpg",
            },
            {
              id: 2,
              url: "https://www.petguide.com/wp-content/uploads/2013/02/irish-wolfhound-11.jpg",
            },
            { id: 3, url: "https://i.imgur.com/Eitr7j1.jpeg" },
            {
              id: 4,
              url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.b3KxkDCCoBeD8RmKsC7V-wHaEo%26pid%3DApi&f=1",
            },
          ],
        },
        {
          name: "Dora",
          breed: "Dachsund",
          url: "https://dachshundbonus.com/wp-content/uploads/2019/07/67338805_2295690134004037_9023976367661776896_n.jpg",
          bio: "Dora is a strikingly wise dog who likes to play by softly gazing at the television or a lava lamp. She tolerates other dogs well, but eschews rough and tumble style play. Her favourite toy is a stuffed Descartes.",
          extraphotos: [
            {
              id: 1,
              url: "https://www.petpaw.com.au/wp-content/uploads/2013/02/Dachshund1.jpg",
            },
            {
              id: 2,
              url: "https://petsidi.com/wp-content/uploads/2018/09/brown-dachshund-puppy.jpg",
            },
            {
              id: 3,
              url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2679612%2Fpexels-photo-2679612.jpeg%3Fcs%3Dsrgb%26dl%3Dselective-focus-photo-of-brown-dachshund-2679612.jpg%26fm%3Djpg&f=1&nofb=1",
            },
            {
              id: 4,
              url: "https://www.animalfunfacts.net/images/stories/picture_of_the_day/pet_dachshund.jpg",
            },
          ],
        },
      ],
    };
  }

  togglePics = () => {
    this.setState((prevState) => {
      return prevState.showDogs ? { showDogs: false } : { showDogs: true };
    });
  };

  toggleSubmissions = () => {
    this.setState((prevState) => {
      return prevState.showSubmissionForm
        ? { showSubmissionForm: false }
        : { showSubmissionForm: true };
    });
  };

  chooseDog = (name) => {
    this.setState((prevState) => {
      if (prevState.selectedDog !== name) {
        return { selectedDog: name };
      } else if (prevState.selectedDog) {
        return { selectedDog: null };
      }
    });
  };

  addToDogList = (name, breed) => {
    let newDog = {
      name: name,
      breed: breed,
      url: placeholder_dog,
      bio: "",
      extraphotos: [],
    };
    this.setState((prevState) => {
      return { dogList: [...prevState.dogList, newDog] };
    });
  };

  changeColor = () => {
    let newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.setState((prevState) => {
      return { backgroundColor: newColor };
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <Navbar />
        <ChangeColorButton changeColor={this.changeColor} />

        <Router>
          <HomePage
            addToDogList={this.addToDogList}
            togglePics={this.togglePics}
            toggleSubmissions={this.toggleSubmissions}
            chooseDog={this.chooseDog}
            selectedDog={this.state.selectedDog}
            dogList={this.state.dogList}
            showDogs={this.state.showDogs}
            showSubmissionForm={this.state.showSubmissionForm}
            path="/"
          />
          <ContactPage path="/contact" />
          <DogPage path="/dogs/:hundname" dogList={this.state.dogList} />
        </Router>
      </div>
    );
  }

  componentDidMount() {
    this.changeColor();
  }
}

export default App;
