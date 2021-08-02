
import Layout from "./layout/Layout";
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./home/Home";
import TweettHashTag from "./tweetHashTag/TweettHashTag";
function App() {

  return (
      <BrowserRouter>
    <Route path={"/"} render={()=>{
        return <Layout>

                <Route exact path={"/"} component={Home}/>
                <Route path={"/hash"} component={TweettHashTag}/>
        </Layout>
    }}/>
      </BrowserRouter>


  );
}

export default App;
