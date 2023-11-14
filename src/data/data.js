// image import
import notificationBellIcon from "../assest/bell.png";
import barchartIcon from "../assest/bar-chart-2.png";
import checkmarkIcon from "../assest/Checkmark.png";
import clockIcon from "../assest/clock.png";
import thirtyIcon from "../assest/thirty.png";
import thousandIcon from "../assest/thousand.png";

export const notificationCards = [
  {
    cardNo: "first",
    leftHeader: notificationBellIcon,
    rightHeaderText: "Save",
    text: `We’ll be sending  notifications to you here`
  },

  {
    cardNo: "second",
    leftHeader: barchartIcon,
    rightHeader: checkmarkIcon,
    bottomImg: thousandIcon,
    text: "Notify me when any wallets move more than"
  },
  {
    cardNo: "third",
    leftHeader: clockIcon,
    bottomImg: thirtyIcon,
    bottomText: "becomes Active",
    rightHeader: checkmarkIcon,
    text: "Notify me when any wallet dormant for"
  }
];
export const testimonialCards = [
  {
    cardNo: "first",
    name: "Jack F",
    desc: "Ex Blackrock PM",
    text:
      "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”"
  },
  {
    cardNo: "second",
    name: "Yash P",
    desc: "Research, 3poch Crypto Hedge Fund",
    text:
      "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”"
  },
  {
    cardNo: "third",
    name: "Shiv S",
    desc: "Co-Founder Magik Labs",
    text:
      "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”"
  }
];
