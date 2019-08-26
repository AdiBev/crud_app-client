import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Typography, Layout } from "antd";

import NavBar from "./Nav";
import GetPokemons from "./ViewPokemons";
import WrappedPokemonForm from "./AddPokemons";

const { Title } = Typography;
const { Header, Content } = Layout;

function App() {
  return (
    <div>
      <Header>
        <Title className="heading">
          <Link to="/">Pokédex</Link>
        </Title>
        <NavBar />
      </Header>
      <Content>
        <Switch>
          <Route exact path="/" component={GetPokemons} />
          <Route path="/addpokemons" component={WrappedPokemonForm} />
          <Route
            component={() => (
              <Title level="h2" className="page-error">
                Sorry! this page doesn't exist!
              </Title>
            )}
          />
        </Switch>
      </Content>
    </div>
  );
}

export default App;
