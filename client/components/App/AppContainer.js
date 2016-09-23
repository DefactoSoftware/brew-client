import Relay from 'react-relay';
import App from './AppComponent';

export default Relay.createContainer(App, {
  fragments: {
    workTime: () => Relay.QL`
      fragment on WorkTime {
        id,
        startTime,
        minutes
      }
    `,
  },
});
