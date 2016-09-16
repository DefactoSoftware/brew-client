import React from 'react';
import styles from './App.scss';

export default class App extends React.Component {
  static propTypes = {
    workTimes: React.PropTypes.array
  };

  render() {
    const { workTimes } = this.props;
    return (
      <div className={styles.root}>
        {workTimes.map(({ id }) => id).join(', ')}
      </div>
    );
  }
}
