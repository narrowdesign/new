import React from 'react';
import cxs from 'cxs';

class Project extends React.Component {
  render() {
    const cx = {
      root: cxs({
        position: 'relative'
      }),
      heading: cxs({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        height: '70vh',
        margin: '2rem 0 3rem 0',
        backgroundImage: `linear-gradient( 0deg, ${this.props.projectData.color}, ${this.props.projectData.color2} )`,
        color: '#fff'
      }),
      h1: cxs({
        display: 'flex',
        alignItems: 'center',
        fontSize: '4vw',
        flexBasis: '50%',
        borderBottom: '1px solid',
        margin: 0
      }),
      h2: cxs({
        display: 'flex',
        alignItems: 'center',
        fontSize: '4vw',
        flexBasis: '50%',
        margin: 0
      }),
      images: cxs({
        padding: '2vw'
      }),
      img: cxs({
        width: '100%',
        margin: 0,
        display: 'block',
        position: 'relative',
        top: '-3rem',
      }),
      texture: cxs({
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundImage: 'url(/images/texture.png)',
        backgroundSize: '5vw',
        opacity: .1,
        mixBlendMode: 'overlay'
      })
    }
    let images = this.props.projectData.images.map((image, i) => {
      return (
        <img className={cx.img} src={image} role="presentation" />
      )
    });
    let client = this.props.projectData.client;
    let project = this.props.projectData.project;
    return (
      <div className={cx.root}>
        <div className={cx.heading}>
          <div className={cx.texture}></div>
          <h1 className={cx.h1}>{client}</h1>
          <h2 className={cx.h2}>{project}</h2>
        </div>
        <div className={cx.images}>
          {images}
        </div>
      </div>
    )
  }
}

Project.contextTypes = {
  router: React.PropTypes.object
}


export default Project;
