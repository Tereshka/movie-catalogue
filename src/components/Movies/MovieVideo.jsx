import React from 'react';
import { Spinner } from 'reactstrap';

import CallApi from '../../api/api';

export default class MovieVideo extends React.Component {

  state = {
    videoList: [],
    isLoading: false,
  }

  componentDidMount() {
    const { movie } = this.props;
    this.setState({ isLoading: true });
    CallApi.get(`/movie/${movie.id}/videos`).then(data => this.setState({ videoList: data.results, isLoading: false }));
  }

  render() {
    const { videoList, isLoading } = this.state;
    return (
      <div className="row">
        {isLoading && <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />}
        {videoList.map(video => (
          <div key={video.id} className="col-3 mb-2">
            <a target="_blank" href={`http://www.youtube.com/watch?v=${video.key}`} rel="noopener noreferrer" >
              <img className="img-fluid" src={`https://img.youtube.com/vi/${video.key}/default.jpg`} alt={video.name} />
            </a>
          </div>
        ))}
      </div>);
  }
}