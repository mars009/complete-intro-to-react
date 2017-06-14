// @flow
import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Spinner from './Spinner';

class Details extends Component {
  state = {
    apiData: {
      rating: ''
    }
  };

  componentDidMount() {
    axios.get(`http://localhost:3000/${this.props.show.imdbID}`).then((response: { data: { rating: string } }) => {
      this.setState({ apiData: response.data });
    });
  }

  props: {
    show: Show
  };

  render() {
    const { title, description, year, poster, trailer } = this.props.show;

    // This variable will point to either an h3 or a spinner depending on whether the call to the api
    // has come back or we are waiting. When the calls comes back in "componentDidMount" React re-renders
    // and the <h3> with the rating will be shown
    let ratingComponent;
    // If we have gotten the data back from the api we set rating component to a <h3> with the rating
    if (this.state.apiData.rating) {
      ratingComponent = <h3>{this.state.apiData.rating}</h3>;
    } else {
      // Otherwise we show the Spinner
      ratingComponent = <Spinner />;
    }

    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {ratingComponent}
          <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
            title={`Trailer for ${title}`}
          />
        </div>
      </div>
    );
  }
}

export default Details;
