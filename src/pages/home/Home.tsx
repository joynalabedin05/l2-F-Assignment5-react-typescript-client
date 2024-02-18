import BannerText from "./BannerText";
import EventItem from "./EventItem";
import Freequently from "./Freequently";
import Gallery from "./Gallery";
import OurService from "./OurService";
import PricePlans from "./PricePlans";
import RecentEvents from "./RecentEvents";
import StayIntheKnow from "./StayIntheKnow";
import UpEvents from "./UpEvents";
import WhatClientSay from "./WhatClientSay";


const Home = () => {
    return (
        <div className="font-roboto">
            <BannerText></BannerText>
            <OurService></OurService>
            <EventItem></EventItem>
            <PricePlans></PricePlans>
            <Gallery></Gallery>
            <RecentEvents></RecentEvents>
            <UpEvents></UpEvents>
            <WhatClientSay></WhatClientSay>
            <Freequently></Freequently>
            <StayIntheKnow></StayIntheKnow>
            
        </div>
    );
};

export default Home;