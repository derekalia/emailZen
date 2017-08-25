import React from 'react';
import { connect } from 'react-redux';
import Payments from './Payments';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return 'still deciding';
      case false:
        return (
          <li>
            <a href="/auth/google">Login with google</a>
          </li>
        );
      default:
        return;
        [
          <li>
            <Payments />
          </li>,
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props);

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
            Emaily
          </Link>
          <ul className="right">
            {this.renderContent()}
          </ul>
        </div>
        Header
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
