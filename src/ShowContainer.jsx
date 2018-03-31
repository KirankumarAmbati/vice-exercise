import React from 'react';
import queryString from 'query-string';
import ShowList from './ShowList';
import FeaturedShow from './FeaturedShow';

function getIdFromUrl() {
  const query = queryString.parse(window.location.search);
  return query && query.id;
}

class ShowContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [{
        product_image_url: '',
        episodes: 0,
        title: '',
      }],
      activeIndex: 0,
    };

    this.handleShowlistClick = this.handleShowlistClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/shows')
      .then(res => res.json())
      .then((shows) => {
        const activeIndex = this.findActiveIndex(shows) || 0;
        this.setState({ activeIndex, shows });
      });

    window.onpopstate = () => {
      this.setState({ activeIndex: this.findActiveIndex() });
    };
  }

  findActiveIndex(shows = this.state.shows) {
    const index = shows.findIndex(({ id }) => `${id}` === `${getIdFromUrl()}`);
    return index > -1 && index;
  }

  handleShowlistClick(newIndex) {
    const { shows } = this.state;

    this.setState({ activeIndex: newIndex });
    window.history.pushState({}, '', `?id=${shows[newIndex].id}`);
  }

  render() {
    const { shows, activeIndex } = this.state;

    return (
      <div className="show-container">
        <FeaturedShow show={shows[activeIndex]} />
        <ShowList
          rightBound={shows.length}
          activeIndex={activeIndex}
          handler={this.handleShowlistClick}
        />
      </div>
    );
  }
}

export default ShowContainer;
