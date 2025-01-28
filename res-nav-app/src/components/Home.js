import React from "react";
import '../App.css';
import { ReactComponent as BigLogo } from './assets/big_logo_lbg.svg';


function Home (){
    return(
        <div>
            <div className="componentHero">
                <section>
                    <BigLogo className="bigLogo" alt="MidTown ButcherShop Logo" title="MidTown ButcherShop Logo"></BigLogo>
                </section>
            </div>
            <section>
                <h1>Welcome!</h1>
                <p>Bacon ipsum dolor amet landjaeger t-bone shoulder, boudin ground round shank strip steak ribeye bacon porchetta bresaola kielbasa tail. Rump cupim shoulder short ribs tail sausage jerky kevin, drumstick hamburger turkey shank ribeye jowl landjaeger. Doner kevin turducken, venison salami tongue flank kielbasa t-bone landjaeger shankle tenderloin rump pork loin. Capicola pancetta doner biltong, turkey brisket rump jowl filet mignon. Meatball kevin doner ground round. Chuck capicola salami, chislic bresaola boudin pastrami tri-tip flank turkey cupim frankfurter short ribs. T-bone strip steak boudin drumstick, beef ribs landjaeger short ribs pork shoulder.</p>
            </section>
        </div>
    );
};

export default Home;