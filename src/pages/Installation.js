import React from "react";
import DefaultNav from "../components/DefaultNav";
import Footer from "../components/Home/Footer";
import "./installation.scss";

export default function Installation({ dark, dark_toggle, state }) {
  return (
    <div className="installation" id="iTop">
      <DefaultNav dark={dark} dark_toggle={dark_toggle} />

      <div className="wrapper">
        <div className="head">Installation</div>

        <div className="subHead">
          Step <span>1</span>
        </div>
        <div className="process">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis turpis at massa consequat, a congue augue imperdiet. Etiam
          aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec
          consectetur est sit amet nisl placerat maximus. Etiam ut risus
          ultrices, vehicula tortor at, congue magna. Donec eget ornare purus.
          In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum
          eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at
          scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales
          nec ac nunc. Proin porta eget urna sed egestas.
        </div>

        <div className="subHead right">
          Step <span>2</span>
        </div>
        <div className="process">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis turpis at massa consequat, a congue augue imperdiet. Etiam
          aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec
          consectetur est sit amet nisl placerat maximus. Etiam ut risus
          ultrices, vehicula tortor at, congue magna. Donec eget ornare purus.
          In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum
          eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at
          scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales
          nec ac nunc. Proin porta eget urna sed egestas.
        </div>

        <div className="subHead">
          Step <span>3</span>
        </div>
        <div className="process">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis turpis at massa consequat, a congue augue imperdiet. Etiam
          aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec
          consectetur est sit amet nisl placerat maximus. Etiam ut risus
          ultrices, vehicula tortor at, congue magna. Donec eget ornare purus.
          In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum
          eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at
          scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales
          nec ac nunc. Proin porta eget urna sed egestas.
        </div>

        <div className="subHead right">
          Step <span>4</span>
        </div>
        <div className="process">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis turpis at massa consequat, a congue augue imperdiet. Etiam
          aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec
          consectetur est sit amet nisl placerat maximus. Etiam ut risus
          ultrices, vehicula tortor at, congue magna. Donec eget ornare purus.
          In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum
          eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at
          scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales
          nec ac nunc. Proin porta eget urna sed egestas.
        </div>

        <div className="subHead">
          Step <span>5</span>
        </div>
        <div className="process">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis turpis at massa consequat, a congue augue imperdiet. Etiam
          aliquet tempus tincidunt. Vivamus quis tincidunt nisl. Donec
          consectetur est sit amet nisl placerat maximus. Etiam ut risus
          ultrices, vehicula tortor at, congue magna. Donec eget ornare purus.
          In faucibus tellus vel diam tempor blandit. Pellentesque vestibulum
          eleifend tortor sed pellentesque. Mauris bibendum hendrerit ipsum at
          scelerisque. Mauris at felis mi. In in dolor at nisl pretium sodales
          nec ac nunc. Proin porta eget urna sed egestas.
        </div>

        <div className="noteWrapper">
          <div className="noteContainer">
            <i className="ri-information-line"></i>
            <div className="note">
              You can skip any line not applicable to you, example u can skip
              gapps if ur rom already has gapps
            </div>
          </div>

          <div className="noteContainer error">
            <i className="ri-alarm-warning-fill"></i>
            <div className="note">
              DO NOT INSTALL MAGICAL MAGISK MODULES LIKE{" "}
              <span>FDE.AI, MAGNETAR etc.</span> & those claiming to{" "}
              <span>"BOOST RAM MANAGEMENT"</span> Take this as a warning before
              I start blocking their running in harsh way.
            </div>
          </div>
        </div>
      </div>

      <Footer
        start={state.started}
        end={state.ends}
        donate={state.donate}
        groups={state.support_groups}
      />
    </div>
  );
}
