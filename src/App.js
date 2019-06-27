import React, {Component} from 'react';
import ErrorView from "./components/ErrorView";
import Viewer from "./components/Viewer";
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';

import moment from 'moment';

import * as api from './lib/api';


class App extends Component {

  state = {
    loading: false,
    maxDate: null,
    date: null,
    url: null,
    mediaType: null,
    isError: false
  }

  getAPOD = async (date) => {

    // 현재 로딩중이면 return
    if( this.state.loading ) 
      return;

    this.setState({
      loading: true,
      isError: false
    });

    try {
      const result = await api.getAPOD(date);
      const { date:retrievedDate, url, media_type:mediaType } = result.data;

      if( !this.state.maxDate ) {
        this.setState({
          maxDate: retrievedDate
        })
      }

      this.setState({
        date: retrievedDate,
        url,
        mediaType,
        isError: false
      });
      
    } catch (error) {
      console.log(error);
      this.setState({
        isError: true
      });
    }

    this.setState({
      loading: false
    });
  }

  handlerPrev = () => {
    const { date } = this.state;
    const prevDate = moment( date ).subtract(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(prevDate);
  }

  handlerNext = () => {
    const { date, maxDate } = this.state;
    if( date === maxDate )
      return;
    const nextDate = moment( date ).add(1, 'days').format('YYYY-MM-DD');
    this.getAPOD(nextDate);
  }

  render() {
    const { url, mediaType, loading, isError } = this.state;
    return (
      <ViewerTemplate 
        spaceNavigator={
          <SpaceNavigator 
            isError={isError}
            onPrev={this.handlerPrev} 
            onNext={this.handlerNext} />
        }
        viewer={
          isError === false ?
          (
            <Viewer
              url={url}
              mediaType={mediaType} 
              loading={loading}/>
          ) :
          (
            <ErrorView />
          )
        }
      />
    );
  }

  componentDidMount() {
    this.getAPOD();
  }
}

export default App;
