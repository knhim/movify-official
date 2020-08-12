import React from 'react';
import ViewReviewsCard from './view-reviews-card';

class ViewOtherReviewsPage extends React.Component {

  render() {
    return (<>
      <div className="container">
        <h1>Reviews</h1>
        <div className="row mt-1">
          {this.props.reviews.map((item, index) => {
            return (
              <ViewReviewsCard
                key={index}
                deleteReview={this.props.deleteReview}
                editReview={this.props.editReview}
                changeView={this.props.changeView}
                item={item} />);
          })}

        </div>

      </div>
    </>);
  }

}

export default ViewOtherReviewsPage;
