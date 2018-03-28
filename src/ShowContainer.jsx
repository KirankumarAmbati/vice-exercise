import React from 'react';
import queryString from 'query-string';
import ShowList from './ShowList';
import FeaturedShow from './FeaturedShow';

class ShowContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      shows: [],
      featured: {
        name: 'Placeholder',
      },
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/teams')
      .then(res => res.json())
      .then((shows) => {
        let featured = shows[0];
        const query = queryString.parse(window.location.search);
        if (query && query.id) {
          featured = shows.find(({ id }) => `${id}` === query.id) || featured;
        }

        this.setState({ shows, featured });
      });
  }

  render() {
    return (
      <div>
        <FeaturedShow name={this.state.featured.name} />
        <ShowList shows={this.state.shows} />
      </div>
    );
  }
}

export default ShowContainer;
