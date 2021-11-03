import "./App.css";
import DogCard from "./DogCard";
import React, { Component } from "react";
import TogglePicsButton from "./TogglePicsButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDogs: true,
      selectedDog: null,
    };
  }
  dogList = [
    {
      name: "Rex",
      breed: "Rottweiler",
      url: "https://cdn.petpress.net/wp-content/uploads/2019/10/12222841/Rottweiler8-.jpg",
      extraphotos: [
        "https://www.bil-jac.com/media/nhyd0qet/rottweiler-868607572.jpg",
        "http://3.bp.blogspot.com/-ZXixpl4wbCE/UIXNI2jDBfI/AAAAAAAABDY/H8l5InQBgHI/s1600/Rottweiler-Puppy-Picture.JPG",
        "https://petplaceimages-embracepetinsura1.netdna-ssl.com/wp-content/uploads/2018/03/Rottweiler.jpg?x32814",
        "https://allhdwallpapers.com/wp-content/uploads/2016/07/Rottweiler-1-2.jpg",
      ],
    },
    {
      name: "Wally",
      breed: "Wolfhound",
      url: "https://i.pinimg.com/originals/77/9c/ec/779cec6e3a9230a8284e1087e80a3832.jpg",
      extraphotos: [
        "https://www.petpaw.com.au/wp-content/uploads/2014/06/Irish-Wolfhound-11.jpg",
        "https://www.petguide.com/wp-content/uploads/2013/02/irish-wolfhound-11.jpg",
        "https://i.imgur.com/Eitr7j1.jpeg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.b3KxkDCCoBeD8RmKsC7V-wHaEo%26pid%3DApi&f=1",
      ],
    },
    {
      name: "Dora",
      breed: "Dachsund",
      url: "https://dachshundbonus.com/wp-content/uploads/2019/07/67338805_2295690134004037_9023976367661776896_n.jpg",
      extraphotos: [
        "https://www.petpaw.com.au/wp-content/uploads/2013/02/Dachshund1.jpg",
        "https://petsidi.com/wp-content/uploads/2018/09/brown-dachshund-puppy.jpg",
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2679612%2Fpexels-photo-2679612.jpeg%3Fcs%3Dsrgb%26dl%3Dselective-focus-photo-of-brown-dachshund-2679612.jpg%26fm%3Djpg&f=1&nofb=1",
        "https://www.animalfunfacts.net/images/stories/picture_of_the_day/pet_dachshund.jpg",
      ],
    },
  ];

  togglePics = () => {
    this.setState((prevState) => {
      return prevState.showDogs ? { showDogs: false } : { showDogs: true };
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

  render() {
    return (
      <div className="App" style={{ backgroundColor: "lightskyblue" }}>
        <TogglePicsButton togglePics={this.togglePics} />

        {this.dogList.map((pet) =>
          this.state.selectedDog === null ? (
            <>
              <DogCard
                pet={pet}
                hierIstHund={this.state.showDogs}
                selectedDog={this.state.selectedDog}
                chooseDog={this.chooseDog}
              />
            </>
          ) : this.state.selectedDog === pet.name ? (
            <>
              <DogCard
                pet={pet}
                hierIstHund={this.state.showDogs}
                selectedDog={this.state.selectedDog}
                chooseDog={this.chooseDog}
              />
            </>
          ) : (
            ""
          )
        )}
      </div>
    );
  }
}

export default App;
