const AppRegistry = require('react-native').AppRegistry;
const FrintReact = require('frint-react');

function register(app) {
  const Component = FrintReact.getMountableComponent(app);

  AppRegistry.registerComponent(app.getName(), () => Component);
}

module.exports = {
  register: register
};
