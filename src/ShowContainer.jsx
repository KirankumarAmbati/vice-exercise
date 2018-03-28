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
      featured: {
        name: 'Placeholder',
      },
    };

    this.handleShowlistClick = this.handleShowlistClick.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3001/teams')
      .then(res => res.json())
      .then((shows) => {
        this.setState({ shows });

        const featured = this.findFeatured() || shows[0];
        this.setState({ featured });
      });

    window.onpopstate = () => {
      this.changeFeatured();
    };
  }

  findFeatured(incomingId = getIdFromUrl()) {
    return this.state.shows.find(({ id }) => `${id}` === `${incomingId}`);
  }

  changeFeatured(id) {
    const featured = this.findFeatured(id);
    if (featured && featured.id !== this.state.featured.id) {
      this.setState({ featured });
    }
  }

  handleShowlistClick(id) {
    this.changeFeatured(id);
    window.history.pushState({}, '', `?id=${id}`);
  }

  render() {
    return (
      <div>
        <FeaturedShow
          name={this.state.featured.name}
        />
        <ShowList
          handler={this.handleShowlistClick}
          shows={this.state.shows}
        />
      </div>
    );
  }
}

export default ShowContainer;
