import React from 'react';
import {Link} from 'react-router-dom'

function ThemeSwitcher(){
    return(
      <main>
        <h1 className="heading">THEME SWITCHER</h1>
        <Link className="text" to="themed/default">Default</Link>
        <Link className="text" to="themed/superman">Superman</Link>
        <Link className="text" to="themed/batman">Batman</Link>
        <Link className="text" to="/">Back HomePage</Link>
      </main>
    )
  }

export default ThemeSwitcher