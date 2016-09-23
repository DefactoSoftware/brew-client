import Relay from 'react-relay';

export default {
  workTime: Component => Relay.QL`
    query {
      workTime(id: "1") {
        ${Component.getFragment('workTime')}
      }
    }
  `,
};
