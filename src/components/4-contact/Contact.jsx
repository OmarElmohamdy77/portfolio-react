import "./contact.css";
import { useForm, ValidationError } from '@formspree/react';
import Lottie from "lottie-react";
import doneAnimation from '../../../src/animation/Animation - 1726865964591.json'
import contactAnimation from '../../../src/animation/Animation - 1726867206570.json'


const Contact = () => {
    const [state, handleSubmit] = useForm("xzzplrrg");
    return (
    <section className="Contact-US">
        <h1 className="title">
        <span className="icon-envelope"></span>
        Contact us
        </h1>
        <p className="sub-title">
        Contact us for more information get notified when i publish something
        new
        </p>

        <div style={{justifyContent: "space-between"}} className="flex">
        <form onSubmit={handleSubmit} action="">
            <div className="flex">
            <label htmlFor="email">Email Address</label>
            <input autoComplete="off " required type="email" name="email" id="email"></input>
            <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
            />
            </div>

            <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
            />
            </div>

            <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "submitting ..." : "submit"}
            </button>
            
            {state.succeeded && (
            <p className="flex" style={{fontSize: "18px", marginTop: "1.7rem"}}>
                <Lottie loop={false} style={{height: 37}} animationData={doneAnimation} />
                Thanks for joining! I will send you an email when I publish something new.
            </p>)}
        </form>
        <div className="animation">
        <Lottie className="contact-animation"  style={{height: 355}} animationData={contactAnimation} />
        </div>
        </div>
    </section>
    );
};
export default Contact;
