import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
    backgroundColor: 'transparent',
  },
};

const TabsSimple = () => (
  <Tabs className="tab"
    inkBarStyle={{
    background: '#425575',
    width: '85px',
  }}>
    <Tab label="Aktywne (4)" className="singleTab" >
      <div className="tab-content">
        <div className="job">
          <div className="job-panel">
            <div className="job-panel-title">
              <span className="active"></span>
              <a className="title" href="#"><h2>Junior marketing specialist</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="new">3 nowych</span>
                <span className="city">Warszawa</span>
                <span>Trwa 23 dni</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>12<span>+3</span></p>
                <p>Kandydaci</p>
              </div>
              <div className="current job-stat">
                <p>5</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>

          <div className="job-panel">
            <div className="job-panel-title">
              <span className="active"></span>
              <a className="title" href="#"><h2>Sprzątaczka</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="new">1 nowy</span>
                <span className="city">Warszawa</span>
                <span>Trwa 23 dni</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>12<span>+3</span></p>
                <p>Kandydaci</p>
              </div>
              <div className="job-stat">
                <p>5</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="current job-stat">
                <p>3</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>

          <div className="job-panel">
            <div className="job-panel-title">
              <span className="active"></span>
              <a className="title" href="#"><h2>Media specialist</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Warszawa</span>
                <span>Trwa 31 dni</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>52</p>
                <p>Kandydaci</p>
              </div>
              <div className="current job-stat">
                <p>12</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>

          <div className="job-panel">
            <div className="job-panel-title">
              <span className="active"></span>
              <a className="title" href="#"><h2>Office manager</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Warszawa</span>
                <span>Trwa 31 dni</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>12</p>
                <p>Kandydaci</p>
              </div>
              <div className="current job-stat">
                <p>17</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activities">
          <p>Ostatnie aktywności</p>
        </div>
      </div>
    </Tab>
    <Tab label="Szkice" className="singleTab">
      <div className="tab-content">
        <div className="job">
          <div className="job-panel">
            <div className="job-panel-title">
              <a className="title" href="#"><h2>Junior frontend developer</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Warszawa</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="current job-stat">
                <p>0</p>
                <p>Kandydaci</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activities">
          <p>Ostatnie aktywności</p>
        </div>
      </div>
    </Tab>
    <Tab label="Archiwum" className="singleTab">
      <div className="tab-content">
        <div className="job">
          <div className="job-panel">
            <div className="job-panel-title">
              <a className="title" href="#"><h2>Junior marketing specialist</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Warszawa</span>
                <span>Zakończona</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>12</p>
                <p>Kandydaci</p>
              </div>
              <div className="job-stat">
                <p>5</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>5</p>
                <p>Rozmowa</p>
              </div>
              <div className="current job-stat">
                <p>2</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>
          <div className="job-panel">
            <div className="job-panel-title">
              <a className="title" href="#"><h2>Office assistant</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Wrocław</span>
                <span>Zakończona</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>59</p>
                <p>Kandydaci</p>
              </div>
              <div className="job-stat">
                <p>10</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>7</p>
                <p>Rozmowa</p>
              </div>
              <div className="current job-stat">
                <p>1</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activities">
          <p>Ostatnie aktywności</p>
        </div>
      </div>
    </Tab>
    <Tab label="Statystyki" className="singleTab">
      <div className="tab-content">
        <div className="job">
          <div className="job-panel">
            <div className="job-panel-title">
              <a className="title" href="#"><h2>Junior marketing specialist</h2></a>
              <a className="job-settings" href="#"></a>
              <div className="job-panel-info">
                <span className="city">Warszawa</span>
                <span>Trwa 23 dni</span>
              </div>
            </div>

            <div className="job-panel-stats">
              <div className="job-stat">
                <p>12<span>+3</span></p>
                <p>Kandydaci</p>
              </div>
              <div className="current job-stat">
                <p>5</p>
                <p>Zakwalifikowani</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Rozmowa</p>
              </div>
              <div className="job-stat">
                <p>0</p>
                <p>Oferta</p>
              </div>
            </div>
          </div>
        </div>
        <div className="activities">
          <p>Ostatnie aktywności</p>
        </div>
      </div>
    </Tab>
  </Tabs>
);

export default TabsSimple;
