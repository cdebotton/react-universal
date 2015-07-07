import React, { Component, PropTypes } from "react";
import radium, { Style } from "radium";
import { bindActionCreators } from "redux";
import { Connector } from "redux/react";
import { userActions } from "../actions";

@radium
class Home extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const { children } = this.props;

    return (
      <div style={ [styles] }>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        eleifend maximus nibh, eu semper tortor mollis ut. Etiam fringilla
        ullamcorper urna, sit amet blandit ex. Aenean hendrerit sagittis ipsum,
        eget venenatis risus eleifend quis. Vivamus auctor, arcu ut dapibus
        volutpat, ligula est dapibus nisl, eget dignissim ante augue at odio.
        Integer blandit enim at enim hendrerit porttitor ac quis massa.
        Sed pharetra egestas consequat.</p>
        <p>Integer sed purus ut enim scelerisque porttitor. Etiam sodales
        tellus quis lorem consectetur, ut mollis risus malesuada. Nulla
        scelerisque porta orci, in varius erat blandit et. Morbi consectetur
        lectus quis sem cursus, eu gravida metus condimentum. Morbi viverra
        sed risus in pretium. In gravida dui ut orci sodales sollicitudin.
        Morbi est tortor, vulputate vitae iaculis sit amet, mollis vitae tortor.
        Duis ut metus ut ex elementum rutrum. Aenean dolor elit, luctus vitae
        ante eu, cursus pretium justo. Pellentesque hendrerit consequat
        sodales.</p>
        <p>Donec feugiat diam id pellentesque consectetur. Vestibulum
        ullamcorper diam turpis, sit amet pulvinar libero tincidunt ut.
        Etiam vitae erat ligula. Maecenas risus risus, tempus vel hendrerit
        sed, porta nec augue. Vestibulum pellentesque convallis metus, ac
        ornare massa aliquet sed. Sed eget dolor consectetur, fermentum leo
        vel, efficitur arcu. Phasellus risus lacus, ullamcorper quis
        scelerisque sit amet, interdum ac augue. Proin maximus vitae quam non
        tincidunt. Fusce consectetur id dui id porttitor. Quisque venenatis,
        nisi ac venenatis sagittis, sem diam vestibulum ante, nec sagittis
        magna lacus in libero. Cras ac est purus. Morbi fermentum consectetur
        mi. Aenean non rhoncus massa. Pellentesque scelerisque finibus est
        non ullamcorper. Sed tempus tortor sit amet dictum venenatis. Praesent
        ac magna mattis, gravida felis eu, auctor lorem.</p>
        <p>Aenean mattis, nisi vel lobortis maximus, velit tellus semper metus,
        ac tincidunt urna dolor nec est. In faucibus, sapien vel cursus viverra,
        mauris dolor pellentesque ipsum, ac blandit magna ante ac felis.
        Maecenas venenatis ipsum at sollicitudin vestibulum. Cras imperdiet
        tellus finibus arcu ornare molestie. Nullam efficitur imperdiet
        tortor.</p>
        <p>Duis tempus libero quis mauris lacinia laoreet. Duis non semper
        lorem, sed mollis enim. Sed vel posuere nisl. Maecenas sit amet arcu
        augue. Mauris pretium elit dolor, ac porta justo volutpat eget. In
        euismod mattis nibh, eget commodo orci pellentesque non. Integer laoreet
        condimentum est eget facilisis. Fusce quis ipsum at magna ultrices
        scelerisque.</p>
        <p>Donec non elit vitae lacus fermentum facilisis eget mattis justo.
        Phasellus suscipit velit sagittis, interdum libero ut, faucibus nisi.
        Maecenas lobortis, sapien eget sagittis vehicula, sem turpis porta nibh,
        et tincidunt metus nibh a augue. Aliquam molestie porta vestibulum.
        Curabitur laoreet ipsum velit, in porta orci vestibulum vitae.
        Nulla rhoncus ex vel enim varius convallis. Morbi cursus scelerisque
        augue, id malesuada arcu accumsan in. Curabitur sit amet convallis
        urna, in venenatis est.</p>
        <p>Maecenas et condimentum ex. Pellentesque vel diam ac tortor mollis
        venenatis. In ante lacus, malesuada at purus sit amet, tincidunt tempor
        elit. Phasellus eu feugiat nulla, sed consequat lacus. Pellentesque
        interdum sapien nec blandit tempor. Integer pretium suscipit metus,
        sit amet dapibus quam dapibus eget. Pellentesque eu aliquam diam.
        Suspendisse potenti. Quisque in diam mi. Donec lacus sem, luctus nec
        purus eget, pellentesque accumsan urna. Pellentesque molestie dolor
        massa, quis ultricies eros commodo euismod. Ut auctor tempor eleifend.
        Donec ut mattis lectus. In non est mollis, vestibulum arcu nec, aliquam
        diam. Vivamus nulla nisi, rhoncus ut magna vitae, ultrices
        auctor eros.</p>
      </div>
    );
  }
}

const styles = {
  columnCount: 3,
  "@media (max-width: 1024px)": {
    columnCount: 2
  },
  "@media (max-width: 800px)": {
    columnCount: 1
  }
};

const select = (state) => {
  return {
    users: state.users
  };
};

export default class HomeContainer {
  render() {
    return (
      <Connector select={ select }>
        { ({ users, dispatch }) => (
          <Home
            actions={ Object.assign({},
              bindActionCreators(userActions, dispatch)
            ) }
            users={ users } />
        ) }
      </Connector>
    );
  }
}
