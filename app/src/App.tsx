import React, {Component} from 'react'
import './css/App.css'
import './css/preloader.css'
import {connect, ConnectedProps} from 'react-redux'
import { fetchTests } from './initFunctions'
import {changeOrientation } from './actionCreators'
import Routing from './OtherComponents/Routing'
import Header from './OtherComponents/Header'
import Preloader from './OtherComponents/Preloader'
import ErrorLoading from './OtherComponents/ErrorLoadind'
import {loadAchievementStats} from "./services/achievmentsService/achievementsSlice";
import {fetchTypes} from "./services/filterService/async-actions";

type Props = PropsFromRedux

class App extends Component<Props> {
  checkOrientation = () => {
    let isCurrentLandscape = (window.innerWidth > window.innerHeight)
    if (isCurrentLandscape !== this.props.isLandscape) {
      this.props.changeOrientation()
    }
  }

  loadAchievementsStats = () => {
    for (let [id, date] of Object.entries(this.props.earnedAchievements)) {
      this.props.loadAchievementStats({id, date: date as number})
    }
  }

  handleOrientationChange = () => {
    const afterOrientationChange = () => {
      this.checkOrientation()
      window.removeEventListener('resize', afterOrientationChange)
    }
    window.addEventListener('resize', afterOrientationChange)
  }

  componentDidMount() {
    this.props.fetchTypes()
    this.props.fetchTests('/api/tests')
    this.checkOrientation()
    this.loadAchievementsStats()
    window.addEventListener("orientationchange", this.handleOrientationChange)
  }

  componentWillUnmount() {
    window.removeEventListener("orientationchange", this.handleOrientationChange)
  }

  render() {
    return (<div className='main'>
      <Header />
      {(this.props.doneFetching)
        ? (!this.props.error)
          ? <Routing />
          : <ErrorLoading/>
        : <Preloader/>}
    </div>)
  }
}

const mapState = (state: any) => ({
  doneFetching: state.filter.doneFetching && state.tests.doneFetching,
  error: state.filter.error || state.tests.error,
  isLandscape: state.user.isLandscape,
  earnedAchievements: state.user.earnedAchievements
})

const mapDispatch = { fetchTests, fetchTypes, changeOrientation, loadAchievementStats }

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(App)
