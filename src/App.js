import React, { Component } from 'react';
import NavBar from './components/nav-bar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop'


class App extends Component {
  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    })
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }


  render() {
    let backdrop;

    if(this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.backdropClickHandler}/>
    }
    return (
      <div style={{height: "100%"}}className="App">
       <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
       <SideDrawer show={this.state.sideDrawerOpen}/>
       {backdrop}
        <main style={{marginTop: '64px'}}>
          <p>This is the page</p>
        </main>
      </div>
    );
  }
}

export default App;
