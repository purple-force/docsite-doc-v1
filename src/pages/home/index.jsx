import React from 'react';
import ReactDOM from 'react-dom';
import { Slider } from '@txdfe/at';
import Language from '../../components/language';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FeatureItem from './featureItem';
import homeConfig from '../../../site_config/home';

import './index.scss';

class Home extends Language {
  render() {
    const language = this.getLanguage();
    const dataSource = homeConfig[language];
    return (
      <div className="home-page">
        <Header
          currentKey="home"
          type="normal"
          logo="/img/docsite.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <section className="top-section">
          <div className="left-part">
            <h3 className="title">{dataSource.brand.title}</h3>
            <p className="description">{dataSource.brand.description}</p>
            <button className="install">
              <a href="https://www.npmjs.com/package/docsite" target="__blank">{dataSource.brand.install}</a>
            </button>
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
          <h3 className="title">{dataSource.user.title}</h3>
          <Slider
            slidesToShow={2}
            slidesToScroll={2}
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
