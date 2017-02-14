import React, { Component } from 'react';

const slides = [
  {
    url:'/img/1.jpg',
    title:'Ma première image'
  },{
    url:'/img/2.jpg',
    title:'Ma deuxieme image'
  },{
    url:'/img/3.jpg',
    title:'Ma troisième image'
  },{
    url:'/img/4.jpg',
    title:'Ma quatrième image'
  },
]

class App extends Component {

  state = {
    position: 0
  }

  nextSlide = () => {
    this.setState({position: ++this.state.position})
  }

  prevSlide = () => {
    this.setState({position: --this.state.position})
  }


  render() {

    let newMargin = this.state.position * -400

    return (
      <div className="App">

        <button onClick={this.prevSlide}> Prev </button>

        <div className='container'>
            <ul style={{marginLeft:newMargin}}>
              {slides.map(slide =>
                <li >
                  <img src={slide.url} />
                  <p>{slide.title}</p>
                </li>
              )}
            </ul>
        </div>

        <button onClick={this.nextSlide}> Next </button>


      </div>
    );
  }
}

export default App;
