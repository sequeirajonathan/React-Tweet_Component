import React, {Component} from "react";
import ReactDOM from "react-dom";
import Moment from "moment";
import "./index.css";
import Avatar from "./Avatar";

function Message({text}) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({author}) {
  const {name, handle} = author;
  return (<span className="name-with-handle">
    <span className="name">{name}</span>
    <span className="handle">@{handle}</span>
  </span>);
}

const Time = ({time}) => {
  const timeString = Moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

const ReplyButton = () => <i className="fa fa-reply reply-button"/>;

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}
const RetweetButton = ({count}) => (<span className="retweet-button">
  <i className="fa fa-retweet retweet-button"/> {getRetweetCount(count)}
</span>);

const LikeButton = ({count}) => (<span className="like-button">
  <i className="fa fa-heart like-button"/>{" "}
  {count > 0 && <span className="like-count">{count}</span>}
</span>);

const MoreOptionsButton = () => (<i className="fa fa-ellipsis-h more-options-button"/>);

let tweetList = [
  {
    message: "Wanna see my pet turtles?",
    img: "https://vignette.wikia.nocookie.net/tmnt/images/d/d0/Splinter_tf.png/revision/latest?cb=20130826011832",
    author: {
      handle: "MasterSplint",
      name: "Splinter"
    },
    likes: -6,
    retweets: 1,
    timestamp: "2019-01-15 15:22:17"
  }, {
    message: "We're not pets!",
    img: "https://i.pinimg.com/originals/a2/48/51/a2485179a32f2e3953c22b7fe4295b5a.jpg",
    author: {
      handle: "Leo",
      name: "Loenardo"
    },
    likes: 6,
    retweets: 3,
    timestamp: "2019-01-16 04:18:20"
  }, {
    message: "Who ordered the large hot and spicy?",
    img: "https://i.stack.imgur.com/GObUm.png",
    author: {
      handle: "KenoPizzaGuy",
      name: "Keno"
    },
    likes: 7,
    retweets: 9,
    timestamp: "2019-01-16 17:30:37"
  }
];

class Tweet extends Component {
  render() {
    return (
    <div>
      {
        this.props.tweets.map((tweet,index) => {
        return(
        <div key={index + ' tweet'} className="tweet">
          <Avatar key={index + ' avatar'} url={tweet.img}/>
          <div className="content">
            <NameWithHandle key={index + ' author'} author={tweet.author}/>
            <Time key={index + ' time'} time={tweet.timestamp}/>
            <Message key={index + ' message'} text={tweet.message}/>
            <div className="buttons">
              <ReplyButton key={index + ' reply'}/>
              <RetweetButton key={index + ' retweet'} count={tweet.retweets}/>
              <LikeButton key={index + ' like'} count={tweet.likes}/>
              <MoreOptionsButton key={index + ' more'}/>
            </div>
          </div>
        </div>)})
      }
    </div>
    );
  }
}

ReactDOM.render(<Tweet tweets={tweetList}/>, document.getElementById("root"));
