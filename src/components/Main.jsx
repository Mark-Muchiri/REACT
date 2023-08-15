import reactback from "../assets/react-icon-large.png"

export default function Main() {
    return (
        <main>
            <h1 className="maintitle">Fun facts about React</h1>
            <ul className="mainfacts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
            {/* <img src={reactback} alt="" /> */}
        </main>
    )
}
