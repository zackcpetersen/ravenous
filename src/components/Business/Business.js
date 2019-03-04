import React from 'react';
import './Business.css';

class Business extends React.Component {
  render() {
  //  const { business } = this.props;
    return (
      <div className="Business">
  <div className="image-container">
    <img src={this.props.business.imageSrc} alt='' />
  </div>
  <h2>{this.props.business.name}</h2>
  <div className="Business-information">
    <div className="Business Address">
      <p>{this.props.business.address}</p>
      <p>{this.props.business.city}</p>
      <p>{this.props.business.state}, {this.props.zipCode}</p>
    </div>
    <div className="Business-reviews">
      <h3>{this.props.business.category}</h3>
      <h3 className="rating">{this.props.business.rating} Stars</h3>
      <p className="reviewCount">{this.props.business.reviewCount} reviews</p>
    </div>
  </div>
</div>
    )
  }
}

export default Business;
