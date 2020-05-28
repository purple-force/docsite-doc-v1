import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@txdfe/at';
import enquire from 'enquire.js';
import { getScrollTop } from '../../../utils';
import Language from '../../components/language';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FeatureItem from './featureItem';
import homeConfig from '../../../site_config/home';

import './index.scss';

class Home extends Language {
  constructor(props) {
    super(props);
    this.state = {
      headerType: 'primary',
      sliderToShow: 3,
    };
    this.setHeaderType = () => {
      const scrollTop = getScrollTop();
      if (scrollTop > 66) {
        this.setState({
          headerType: 'normal',
        });
      } else {
        this.setState({
          headerType: 'primary',
        });
      }
    };
    this.mobileRef = React.createRef();
  }

  handFullScreenHide = () => {
    if (!document.fullscreenElement) {
      this.mobileRef.current.style.display = 'none';
    } else {
      this.mobileRef.current.style.display = 'inline-block';
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.setHeaderType);
    this.mobileRef.current.addEventListener('fullscreenchange', this.handFullScreenHide);
    enquire.register('screen and (max-width:1024px)', {
      match: () => {
        this.setState({
          sliderToShow: 1,
        });
      },
      unmatch: () => {
        this.setState({
          sliderToShow: 3,
        });
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.setHeaderType);
    this.mobileRef.current.removeEventListener('fullscreenchange', this.handFullScreenHide);
  }

  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    const { headerType, sliderToShow } = this.state;
    return (
      <div className="home-page">
        <Header
          currentKey="home"
          type={headerType}
          logo="/img/docsite.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <section className="top-section">
          <div className="left-part">
            <h3 className="mobile-title">Docsite</h3>
            <h3 className="title">{dataSource.brand.title}</h3>
            <p className="description">{dataSource.brand.description}</p>
            <button className="install">
              <a href="https://www.npmjs.com/package/docsite" target="__blank">{dataSource.brand.install}</a>
            </button>
            <span
              className="mobile-video"
              onClick={() => {
                this.mobileRef.current.requestFullscreen();
                this.mobileRef.current.play();
              }}
            >
              <video
                ref={this.mobileRef}
                src="https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/Docsite%E8%A7%86%E9%A2%91.mp4"
                type="video/mp4"
                controls
              >
                当前浏览器不支持视频播放
              </video>
              <img src="https://img.alicdn.com/tfs/TB1BQlXIbr1gK0jSZR0XXbP8XXa-80-80.png" />
              <span className="video-text">{dataSource.brand.video}</span>
            </span>
          </div>
          <div className="right-part">
            <video
              muted
              autoPlay
              src="https://tb-site-sketch.oss-cn-hangzhou.aliyuncs.com/Docsite%E8%A7%86%E9%A2%91.mp4"
              type="video/mp4"
              controls
            >
              当前浏览器不支持视频播放
            </video>
          </div>
        </section>
        <section className="feature-section">
          <h3 className="feature-title">{dataSource.feature.title}</h3>
          <div className="feature-container">
            {
              dataSource.feature.list.map((f, i) => <FeatureItem dataSource={f} key={i} />)
            }
          </div>
        </section>
        <section className="user-section">
          <h3 className="user-title">{dataSource.user.title}</h3>
          <p className="user-description">{dataSource.user.description}</p>
          <Slider
            pauseOnHover
            arrows={false}
            slidesToShow={sliderToShow}
            slidesToScroll={sliderToShow}
            dots={sliderToShow === 3}
            autoplay
          >
            {
              dataSource.user.list.map((u, i) => (
                <a className="user" key={i} href={u.link} target="__blank">
                  <img src={u.img} />
                </a>
              ))
            }
          </Slider>
        </section>
        <Footer language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
