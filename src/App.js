import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/gallery/Header.js";
import CharacterList from "./components/gallery/CharacterList";
import Card from "./components/gallery/Card";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/character/" component={CharacterList}/>
      <Route exact path="/character/:id" component={Card} />
    </main>
  );
}