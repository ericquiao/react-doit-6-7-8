import { MarketPlace } from '../marketplace';

export const MarketComp = () => {
  return (
    <div>
      <MarketPlace
        imgsrc="https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=543&amp;h=384&amp;q=80"
        proddetails = "View detail for Nike Air 2021"
        prodcrncy="RM"
        prodprice={99}
        prodinv={5}
        prodname="Nike Air 2021"
        prodtag="So light it feels like walking in the air."
        singleitem={false}
        onEdit={() => alert('Editing Nike Air 2021?')}
        onDelete={() => alert('Deleting Nike Air 2021?!')}
      />
      <MarketPlace
        imgsrc="https://images.unsplash.com/photo-1594995846645-d58328c3ffa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=543&amp;h=384&amp;q=80"
        prodcrncy="RM"
        prodprice={10}
        prodinv={143}
        prodname="Classic Quartz Clock"
        prodtag="Inexpensive. Best as birthday gift for your enemy."
        singeitem={false}
        onEdit={() => alert('Editing Quartz Clock?')}
        onDelete={() => alert('Deleting Quartz Clock?!')}
      />
      <MarketPlace
        imgsrc="https://images.unsplash.com/photo-1571689936114-b16146c9570a?ixid=MnwxMjA3fDB8MHxwaG90b y1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=543&amp;h=384&amp;q=80"
        prodcrncy="RM"
        prodprice="50"
        prodinv="Only One"
        prodname="Handsome Handcarry Bag"
        prodtag="Elegant. Versatile. Influencer-friendly."
        singleitem={true}
        onEdit={() => alert('Editing Hand Carry Bag?')}
        onDelete={() => alert('Deleting Hand Carry Bag?!')}
      />
      <MarketPlace
        imgsrc="https://images.unsplash.com/photo-1596460107916-430662021049?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=543&amp;h=384&amp;q=80"
        prodcrncy="RM"
        prodprice="2500"
        prodinv="Only One"
        prodname="Authentic Seiko Watch"
        prodtag="The Seiko Prospex challenges every limit, with a collection of timepieces for sport lovers and adventure.."
        singleitem={true}
        onEdit={() => alert('Editing Seiko Watch?')}
        onDelete={() => alert('Deleting Seiko Watch?!')}
      />
    </div>
  );
};
