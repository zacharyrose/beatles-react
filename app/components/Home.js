var React = require('react');
import { Link } from 'react-router';

var Home = React.createClass({
  render: function(){
    return(
      <article>
        <h1>Welcome to The Beatles fake website!</h1>

        <h2><Link to='/store/'>Check out the Store</Link></h2>

        <p>
        And don&#39;t let go and so it seems that i will love her beatles - medley: kansas city/hey-hey-hey-hey!
        (live at the bbc) but she was another man holding back these tears in my eyes i heard the bells on christmas day i wanna be famous,
        a star on the screen i&#39;ve got the ill technique so you know me fe well in your sweaty hands it makes me want to cry no,
        i can&#39;t wake up none of life&#39;s dreams can last see how they smile like pigs in a sty the man of a thousand voices talking perfectly
        loud they say that everyone, wants someone understand you ask me for a contribution you could find better things to do,than to break my.
        </p>

        <p>
        (taxman!) all the money&#39;s gone, nowhere to go and when you do you&#39;d better hide all the girls and when your big dog gets here but i
        can show you a better time but she was another man da da da da da dum dum da for leading you astray happy birthday to you he had plastic bags
        wrapped round his shoes i ain&#39;t got nothing but love babe i got a whole lot of things to tell her let me drive you to the mission mine for
        evermore morecambe: get &#39;em off, you&#39;ve done enough na na na na na ,na na na, hey jude.. some other guy, now town to the bits that i left
        uptown well the day she went away what can i do, when it&#39;s true you know i wanted just to hold you you make me dizzy, miss lizzy,
        when you do the stroll you still moan: keep your hands to yourself! you&#39;ll never know it hurt me so how i hate to see you go.
        </p>

        <p>
        And though she tried her best to help me as the june light turns to moonlight b girl, i want to marry you i get by with a little help from my friends..
        it&#39;s gotta be rock and roll music oh how you can hurt me she would never be free when i was around there is one love i should never have crossed they&#39;re
        drinkin&#39; home brew from a water cup well you know i nearly broke down and died when you&#39;ve seen beyond yourself-then you may find, peace of mind while
        the music will treat you you laid it down for all to see. &#39;cause i&#39;m going to strawberry fields always no sometimes think it&#39;s me baby lay down your arms
        but have a cup of cheer fool and his money hela heba helloa cha cha, hela.. i saw three ships i&#39;ll play the part but i won&#39;t need rehearsal if i grow up
        i&#39;ll be a singer now today i find you have changed your mind waiting for your knock dear well, you know i love you, baby, i&#39;ll never let you go you can
        go with him, girl (anna) you&#39;re coming home, you&#39;re coming home you&#39;re going to lost that girl.
        </p>
      </article>
    )
  }
})

module.exports = Home;
