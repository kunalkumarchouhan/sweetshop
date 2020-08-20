import React, { useState } from 'react';
import { items } from './items';
import DialogBox from '../../components/dialog-box';
import { Catelogue, CatelogueItem, ImageWrapper, Img,
  ItemName, Price, AddToCart
} from './styled';

const Shop = props => {
  const [ dialog, toggleDialog ] = useState(-1);
  return (
    <Catelogue>
    {
      items.map(({item, photo, units}, idx) => (
        <CatelogueItem key={idx}>
          <ImageWrapper>
            <Img src={photo} alt={item} />
            <ItemName>
              {item}
            </ItemName>
          </ImageWrapper>
          <Price>
          {
            units.map(({unit, cost}, idx) => `Rs. ${cost}/${unit} ${idx === units.length-1 ? '' : '| ' }`)
          }
          </Price>
          <AddToCart block onClick={e => toggleDialog(idx)} disabled={(dialog > -1)}>
            Add To Cart
          </AddToCart>
        </CatelogueItem>
      ))
    }
    {
      (dialog > -1) &&
      <DialogBox close={() => toggleDialog(-1)} data={items[dialog]}/>
    }
    </Catelogue>
  );
}

export default Shop;
