import React from 'react';
import styles from './App.scss';

export default class App extends React.Component {
  static propTypes = {
    workTime: React.PropTypes.object
  };

  render() {
    const { workTime } = this.props;

    return (
      <div className={styles.root}>
        {Object.keys(workTime).map(k => workTime[k])}
      </div>
    );
  }
}
