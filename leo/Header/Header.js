import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
      
      render() {
        return (
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <a href="/SimpleResume" class="navbar-brand">Simple Resume</a>
                <div class="mr-auto navbar-nav">
                </div>
                <form class="form-inline">
                    <a href="/" data-rb-event-key="/" class="nav-link" color>Home</a>
                    <a href="/Skills" data-rb-event-key="/Skills" class="nav-link">Skills</a>
                    <a href="/Experience" data-rb-event-key="/Experience" class="nav-link">Experience</a>
                </form>
            </nav>
          );
        }
    }

export default Header;