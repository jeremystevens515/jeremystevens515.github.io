import { Link } from "react-router-dom"
import photo from "../images/about-photo.jpg"
export default function About() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="about">
                <img className="about-photo" src={photo} alt="Jeremy Stevens" />

                <section className="software-section software-section-1">
                    <p className="text-2xl text-center w-3/4 p-5">I am a software programmer based out of Nashville, TN with a passion for learning and creating. I love video games, hiking, mountain biking, reading books, and taking photos of the natural world.</p>
                    <p className="text-2xl text-center w-3/4 p-5">I've been married since 2019 to my beautiful wife, Emery, and I have two golden retrievers, Twizzle and Kylo.</p>
                </section>

                <section className="software-section software-section-2">
                    <p className="text-2xl text-center w-3/4 p-5">My professional background as a Registered Nurse in the Intensive Care Unit gives me a unique perspective and has given me many skills that are transferrable to technology-realted fields.</p>
                    <p className="text-2xl text-center w-3/4 p-5">I learn quickly, work well in teams, communicate effectively, and am always looking for new challenges and opportunities to grow.</p>
                </section>
            </div>
            <Link to="/" className="btn btn-ghost">Back &gt;</Link>
        </div>

    )
}