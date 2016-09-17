import Relay from 'react-relay';

export default {
  work_time: Component => Relay.QL`
    query {
      work_time(id: "1") {
        ${Component.getFragment('workTimes')}
      }
    }
  `,
};
