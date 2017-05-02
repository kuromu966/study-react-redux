import React from 'react';
import { configure, addDecorator } from '@kadira/storybook';


///////////////////////////////////////////////////////////////
// story.jsx
const req = require.context('../src', true, /story\.jsx*$/)
function loadStories() {
  req.keys().forEach(req)
}


///////////////////////////////////////////////////////////////
// Decorator
function addSkinList(body,skin,name){
  const li_style = {
    display:'table-cell',
  };
  return (
    <li style={li_style}>
      <button className='btn btn-block btn-default btn-sm' onClick={()=>(body.className=`${skin} layout-top-nav`)}>{name}</button>
    </li>
  )
}

const CenterDecorator = (story) => {
  const html = document.querySelector("html");
  html.style.cssText='height: 100%;';
  const body = document.querySelector("body");
  body.className="skin-blue layout-top-nav";
  body.style.cssText='height: 100%;';
  const root = document.querySelector("div#root");
  root.style.cssText='height: 100%;';
  return (
    <div className="wrapper">
    <ul style={{display:'table'}}>
    <li style={{display:'table-cell','background-color':'#ffffff', padding:"0 10px 0"}}>Skins: </li>
    {addSkinList(body,'skin-blue', 'Blue')}
    {addSkinList(body,'skin-black-light', 'Black')}
    </ul>
    { story() }
    </div>
  );
};

///////////////////////////////////////////////////////////////
// Run
addDecorator(CenterDecorator);
configure(loadStories, module);
