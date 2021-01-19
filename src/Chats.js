import React from 'react';
import './Chats.css'; 
import Chat from "./Chat";

function Chats() {
    return(
        <div className="chats">
            <Chat
            name="Mark"
            message="Yo Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://www.presidentandceomagazine.com/thumbnail.php?file=chrisgorman.jpg&size=article_medium"
            />

            <Chat
            name="Jay"
            message="Yo Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://www.ceotodaymagazine.com/CEO-Today/wp-content/uploads/2018/03/%E9%80%8D%E9%81%A5%E5%AD%90%E6%A0%87%E5%87%86%E7%85%A71-1-732x1024.png"
            />

            <Chat
            name="Toby"
            message="Yo Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://www.franchising.com/images/articleart/2384_Schumacher.jpg"
            />

            <Chat
            name="Frank"
            message="Yo Whats up!"
            timestamp="40 seconds ago"
            profilePic="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/15/20/3-Dan-Price-JoseMandojanaPhotography.jpg?width=982&height=726"
            />
        </div>
    )
}

export default Chats