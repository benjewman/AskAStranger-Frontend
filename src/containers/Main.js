import React from 'react';
import Navbar from '../components/Navbar';

function Main() {
    return (
        <div>
            {/* Navbar up top with options to see your "profile", recent Q&A's */}
            <Navbar />
            {/* Show the question you're waiting to hear back about or the option to ask a question */}
            {/* Show the question asked of you in the middle of the page */}
        </div>
    );
}

export default Main;