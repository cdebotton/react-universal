import {PropTypes} from "react";
import * as graphqlActions from "../actions/graphqlActions";

export default function (fetchQuery, params={}) {
  return function graphql(Component) {
    const {componentWillMount} = Component.prototype;

    Component.contextTypes.store = PropTypes.object.isRequired;

    Component.getQuery = function(name, ...params) {
      return this.queries[name].apply(this, params);
    };

    Component.prototype.componentWillMount = function() {
      const {dispatch} = this.context.store;
      const query = Component.getQuery(fetchQuery, params);

      dispatch(graphqlActions.query(query, params));

      if (componentWillMount) {
        componentWillMount.call(this);
      }
    };

    return Component;
  };
}
