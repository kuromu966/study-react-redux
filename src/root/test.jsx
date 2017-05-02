import React from 'react';
import { Route } from 'react-router';
import Saga from '/saga/test'
import RoutingPage from '/pages/routing';
import HelloApp from '/components/HelloWorld';
import RouteTestApp from '/components/RouteTest';
import { namespace as ReflectFormNamespace,
	 State as ReflectFormState,
	 Reducer as ReflectFormReducer,
	 Container as ReflectFormContainer } from '/components/ReflectForm';
import { namespace as GetFormNamespace,
	 State as GetFormState,
	 Reducer as GetFormReducer,
	 Container as GetFormContainer } from '/components/GetForm';
import { namespace as TimerNamespace,
	 State as TimerState,
	 Reducer as TimerReducer,
	 Container as TimerContainer } from '/components/Timer';

////////////////////////////////////////////////////////////////////////
// Rendering
let page = new RoutingPage(Saga);
page.setComponent("hello_app",document.querySelector('.content'), <HelloApp />);
page.setContainer(ReflectFormNamespace,ReflectFormReducer,ReflectFormState,
		  document.querySelector('.content2'),
		  <ReflectFormContainer />
);
page.setComponent("router_app",document.querySelector('.router'),
		  <Route path="/" component={RouteTestApp} />,
		  true);
page.setContainer(GetFormNamespace,GetFormReducer,GetFormState,
		  document.querySelector(".saga"),
		  <GetFormContainer />
);
page.setContainer(TimerNamespace,TimerReducer,TimerState,
		  document.querySelector(".saga2"),
		  <TimerContainer />
);
page.run();

