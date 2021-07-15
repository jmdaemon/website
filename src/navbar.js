import {LitElement, html, css} from 'lit';

export class NavBar extends LitElement {
  static get styles() {
    return css` 

    a {
      font-family: "Roboto", monospace;
      font-size: 24px;
    }

    .navbar {
      width: 100%;
      background-color: #555;
      overflow: auto;
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;

    }

    /* Navbar links */
    .navbar a {
      float: left;
      text-align: center;
      padding: 12px;
      color: white;
      text-decoration: none;
      font-size: 17px;
    }

    /* Navbar links on mouse-over */
    .navbar a:hover {
      background-color: #000;
    }

    /* Current/active navbar link */
    .active {
      background-color: #04AA6D;
    }

    /* Add responsiveness - will automatically display the navbar vertically instead of horizontally on screens less than 500 pixels */
    @media screen and (max-width: 500px) {
      .navbar a, .media a {
        float: none;
        display: block;
      }
    }

    .icons {
      font-size: 18px;
      margin: 6px;
    }

    .media a {
      float: right;
      text-align: center;
      padding: 12px;
      color: white;
      text-decoration: none;
      font-size: 17px;
    }
    /*

    .media {
      margin: 1em;
      font-size: 17px;
      padding: 12px;
      text-decoration: none;
      text-align: right;
      float:right;
    } 
    */
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="navbar">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fontisto@v3.0.4/css/fontisto/fontisto.min.css"></i>
      <div> 
        <a class="active" href=""><i class="fi icons fi-home"></i>Home</a>
        <a href="/src/html/blog.html"><i class="fi icons fi-file-2"></i>Blog</a>
        <a href="/src/html/apps.html"><i class="fi icons fi-python"></i>Apps</a>
        <a href="/src/html/projects.html"><i class="fi icons fi-code"></i>Projects</a>
        <a href="/src/html/config.html"><i class="fi icons fi-laptop"></i>My Config</a>
      </div>
      <div class="media">
        <a <i class="fi icons media fi-facebook"></i></a>
        <a <i class="fi icons media fi-twitter"></i></a>
        <a <i class="fi icons media fi-instagram"></i></a> 
        <a <i class="fi icons media fi-medium"></i></a>
        <a <i class="fi icons media fi-github"></i></a>
        <a <i class="fi icons media fi-gitlab"></i></a> 
      </div>
    `;
  }
}

window.customElements.define('my-navbar', NavBar);
