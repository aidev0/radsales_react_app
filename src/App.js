import React, {useState} from 'react';
import './App.css'; // Import the CSS for styling
import {init_messages} from "./fake_data";
// A component to display text messages
const TextMessage = ({message}) => {
    let className = 'message';
    let roleLabel = '';
    if (message.role === 'system') {
        className += ' system';
        roleLabel = 'SYSTEM';
    } else if (message.role === 'user') {
        className += ' user';
        roleLabel = 'USER';
    } else if (message.role === 'assistant') {
        className += ' assistant';
        roleLabel = 'ASSISTANT';
    }

    return (
        <div className={className}>
            <div className="role-label">{roleLabel}</div>
            {message.content}
        </div>
    );
};


// A component to display JSON messages in a formatted text block
const JSONMessage = ({message}) => {
    let className = 'message';
    let roleLabel = '';
    if (message.role === 'system') {
        className += ' system';
        roleLabel = 'SYSTEM';
    } else if (message.role === 'user') {
        className += ' user';
        roleLabel = 'USER';
    } else if (message.role === 'assistant') {
        className += ' assistant';
        roleLabel = 'ASSISTANT';
    }

    return (
        <div className={className}>
            <div className="role-label">{roleLabel}</div>
            <div>
                <pre className="json-message">{JSON.stringify(message.content, null, 2)}</pre>
            </div>
        </div>
    );

};

// A component to represent buttons
const Button = ({content, onClick}) => {
    return <button style={{ marginBottom: 20 }} onClick={onClick}>{content}</button>;
};

// A dynamic table component that adapts to the data structure
const Table = ({data}) => {
    // Generate headers from the keys of the first item in the data array
    const headers = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className="table-responsive">
            <table className="styled-table">
                <thead>
                <tr>
                    {headers.map((header, index) => (
                        <th key={index}>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {headers.map((header, keyIndex) => (
                            <td key={keyIndex}>{item[header]}</td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

function App() {
    // copy messages here and add id to each
    const [messages, _] = useState(init_messages);
    const [userInput, setUserInput] = useState('');

    function handleUserInputSubmit() {

    }

    return (
        <div className="App">
            {messages.map((msg, index) => {
                switch (msg.type) {
                    case 'message':
                        return <TextMessage key={index} message={msg.message}/>;
                    case 'json':
                        return <JSONMessage key={index} message={msg.message}/>;
                    case 'button':

                        return <Button key={index} content={msg.message.content}
                                       onClick={() => alert(msg.message.content)}/>;
                    case 'table':
                        return <Table key={index} data={msg.message.content}/>;
                    default:
                        return null;
                }

            })}
            <div className="form-container">
                <form  className="form-container" onSubmit={handleUserInputSubmit}>
                    <input
                        type="text"
                        className="user-input"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="How can I help you?"

                    />
                    <button style={{
                        padding: '10px 20px',
                        borderRadius: '0px',
                        border: 'none',
                        backgroundColor: '#007bff',
                        color: 'white',
                        whiteSpace: 'nowrap' // Prevents the button text from wrapping
                    }} type="submit">Send
                    </button>
                </form>
            </div>
        </div>
    )
        ;

}


export default App;



