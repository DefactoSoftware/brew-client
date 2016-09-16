import Relay from 'react-relay';

export default {
  work_time: Component => Relay.QL`
    query Hello {
      work_time {
        ${Component.getFragment('workTimes')}
      }
    }
  `,
};
