import {LitElement, html, css} from 'lit';

export class SideBar extends LitElement {
  static get styles() {
    return css` 
    ul { 
        list-style-type: none;
        padding: 2em;
        margin: 2em;
        float: left;
        background-color: inherit; 
        background-color: white; 
    }

    li {
      font-size: 18px;
      margin: 1px;
      padding: 1px;
      font-family: "Roboto", monospace;
      text-align: left;
    }

    .sidebar {
      padding: 0;
      float: left;
      padding-top: 60px;
    }
    `;
  }

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="sidebar">
        <ul>
          <li><a href="/dev/about">About Me</a></li>
          <li><a href="/dev/resume.pdf">Resume</a></li>
          <li><a href="/dev/contacts.html">Contacts</a></li>
          <li><a href="mailto:josephm.diza@gmail.com">Email</a></li>
          <li><a href="https://github.com/jmdaemon">GitHub</a></li>
          <li><a href="https://gitlab.com/jmd_">GitLab</a></li>
        </ul>
      </div>
    `;
  }
}

window.customElements.define('my-sidebar', SideBar);
