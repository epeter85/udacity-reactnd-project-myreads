import React, { Component } from 'react';
//import AddMessage from './AddMessage';
//import MessageHistory from './MessageHistory';
import PropTypes from 'prop-types';

/*
This component passes a callback function to AddMessage (called "onMessage")
because we will need to add new messages to the message history in BOTH chat windows.
Because BOTH chat windows need access to the messages piece of state, that piece of
state will live in the App.js file. That means that the callback function
will be passed from the App Component all the way down to the AddMessage Component.
*/
class BookShelf extends Component {
  onUpdateBook = message => {
    //The callback is getting called.
    //this.props.onMessage(this.props.user.username, message);
  };

  render() {
    const { bookShelfName, books } = this.props;

    return (

        <div className="bookshelf">
            <h2 className="bookshelf-title">{bookShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {/* <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">To Kill a Mockingbird</div>
                <div className="book-authors">Harper Lee</div>
              </div> */}
            </li>
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: 'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")' }}></div>
                  <div className="book-shelf-changer">
                    <select>
                      <option value="move" disabled>Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">Ender's Game</div>
                <div className="book-authors">Orson Scott Card</div>
              </div>
            </li>
          </ol>
        </div>
      </div>


    //   <div className="chat-window">
    //     <h2>Super Awesome Chat</h2>
    //     <div className="name sender">{user.username}</div>
    //     <MessageHistory messages={messages} user={user} />
    //     <AddMessage onMessage={this.onMessage} />
    //   </div>

    );
  }
}

ChatWindow.propTypes = {
//   onMessage: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired,
//   messages: PropTypes.array.isRequired,
};

export default BookShelf;
