import React, { Component } from 'react';

export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-thirds s-bgrid-thirds cf">
              {resumeData.portfolio &&
                resumeData.portfolio.slice(0, 3).map((item, index) => { // Limit to three projects
                  const cardStyles = {
                    width: '300px',   // Adjust the width as needed
                    height: '200px', 
                    textAlign: 'center',
                  };

                  return (
                    <div className="columns portfolio-item" key={index}>
                      <div className="item-wrap">
                        <div className="portfolio-item-meta" style={cardStyles}>
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
