import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import countries_graph from '../datamapsco.svg';
import '../App.css';

export const CountriesMap = () => (
      <div className="App">
        <CSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <img src={countries_graph} key={countries_graph} />
        </CSSTransitionGroup>	
      </div>
)

export const AnotherSlide = () => (
      <div className="App">
        <CSSTransitionGroup
            transitionName="slide"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>
            <div key={countries_graph}>
                This is another slide
            </div>
        </CSSTransitionGroup>	
      </div>
)
/*
class Slides extends Component {
    constructor(props) {
        super(props);
        this.slides = [CountriesMap]
    }
 	componentDidMount() {
		//setTimeout(() => { this.props.history.push('/') }, 5000);
	}
  render() {
    // slideIndex always increments (is unaware of slide length)
    // so always take an offset within the array
    const slideNum = this.props.slideIndex % this.slides.length;
    const slide = this.slides[slideNum]();
    console.log(slideNum);
    return (slide);
  }
}
export default connect()(Slides);
*/