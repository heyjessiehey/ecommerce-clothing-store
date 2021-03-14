import React from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    // class field declaration
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state; // destructor
    return (
      <div className="shop-page">
        <h1>Collections</h1>
        {collections.map((
          { id, ...otherCollectionProps } //section props
        ) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
