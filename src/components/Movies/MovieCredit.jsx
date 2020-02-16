import React from 'react';
import { Card, CardText, CardGroup, CardImg, CardImgOverlay, Badge, Spinner } from 'reactstrap';
import CallApi from '../../api/api';

import noPoster from '../../img/no_poster.jpg';

export default class MovieCredit extends React.Component {

  state = {
    actorList: [],
    isLoading: false,
  }

  componentDidMount() {
    const { movie } = this.props;
    this.setState({ isLoading: true });
    CallApi.get(`/movie/${movie.id}/credits`).then(data => this.setState({ actorList: data.cast, isLoading: false }));
  }

  getPosterSrc(value) {
    if (value) {
      return `https://image.tmdb.org/t/p/w500${value}`;
    }
    return noPoster;
  }

  render() {
    const { actorList, isLoading } = this.state;

    return (
      <CardGroup className="mx-3">
        {isLoading && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />}
        {actorList.map((actor, i) => (
          <div key={i}>
            <Card inverse style={{ maxWidth: '300px' }} >
              <CardImg src={this.getPosterSrc(actor.profile_path)} alt={actor.name} />
              <CardImgOverlay>
                <CardText>
                  <Badge color="dark" className="text-wrap">{`${actor.character} / ${actor.name}`}</Badge>
                </CardText>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </CardGroup>
    );

  }
}