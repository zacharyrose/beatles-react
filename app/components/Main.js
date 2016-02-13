var React = require('react');
import { Link } from 'react-router';
var classNames = require('classnames');

const links = {
  'Main': '/',
  'Store': '/store/',
  'Cart': '/cart/'
};

var Main = React.createClass({
  render: function(){

    return (
      <div>
        <header className="logo">
                <h1>The Beatles</h1>
                <nav className="mainnav">
                        <ul className="mainul">
                        {
                          Object.keys(links).map(link => {
                            var classes = classNames("greenlink",{"current" : this.props.location.pathname.split(":")[0]===links[link]});
                            return(
                            <li  key={link}><Link className={classes} to={links[link]}>{ link }</Link></li>
                          );
                          })
                        }
                        </ul>
                </nav>
        </header>
        <main>
        <section className="primary">
            {this.props.children}
        </section>
        </main>
      </div>
    )
  }
});

module.exports = Main;
