import Relay from 'react-relay';
import App from './AppComponent';

export default Relay.createContainer(App, {
  fragments: {
    workTimes: () => Relay.QL`
      fragment on WorkTime @relay(plural: true) {
        id,
        start_time,
        minutes
      }
    `,
  },
});
