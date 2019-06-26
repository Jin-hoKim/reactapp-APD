import React from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';

function App() {
  return (
    <ViewerTemplate spaceNavigator={<SpaceNavigator />} />
  );
}

export default App;
