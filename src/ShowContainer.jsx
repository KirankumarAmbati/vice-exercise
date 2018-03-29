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
      shows: [],
      featuredIndex: 0,
    };

    this.handleShowlistClick = this.handleShowlistClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/teams')
      .then(res => res.json())
      .then((shows) => {
        const featuredIndex = this.findFeaturedIndex(shows) || 0;
        this.setState({ featuredIndex, shows });
      });

    window.onpopstate = () => {
      this.setState({ featuredIndex: this.findFeaturedIndex() });
    };
  }

  findFeaturedIndex(shows = this.state.shows) {
    return shows.findIndex(({ id }) => `${id}` === `${getIdFromUrl()}`);
  }

  handleShowlistClick(delta) {
    const { shows, featuredIndex } = this.state;

    const newIndex = featuredIndex + delta;
    this.setState({ featuredIndex: newIndex });
    window.history.pushState({}, '', `?id=${shows[newIndex].id}`);
  }

  render() {
    const { shows, featuredIndex } = this.state;

    return (
      <div>
        <FeaturedShow show={shows[featuredIndex]} />
        <ShowList handler={this.handleShowlistClick} />
        <h1>{featuredIndex + 1}</h1>
      </div>
    );
  }
}

export default ShowContainer;
