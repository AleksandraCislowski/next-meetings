import MainHeader from "./main-header";
import { Fragment } from "react";

function Layout(props) {
  return (
    <Fragment>
      <main>
        <MainHeader />
        {props.children}
      </main>
    </Fragment>
  );
}

export default Layout;
