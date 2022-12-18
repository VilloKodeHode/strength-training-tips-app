import { useState } from "react";
import Button from "../../Button/Button";
import PopupTextWithImg from "../PopUpText";

const AdvancedTipsWindow = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2 className="text-2xl p-2 text-slate-800 bg-slate-100 bg-opacity-80 rounded-l-lg">
        Advanced tips
      </h2>
      <Button
        className="px-4 py-2 text-slate-100 bg-slate-800 opacity-90 rounded-r-lg"
        text="Click here if you know a bit"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div className="popup  bg-slate-800" id="advancedWindow">
          <h2 className="text-2xl text-slate-100 w-fit">Advanced tips</h2>
          <Button
            className="popup-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div className="popup-text flex flex-wrap justify-center">
            <PopupTextWithImg
              src="http://content.health.harvard.edu/wp-content/uploads/2021/09/d2e376d4-88ce-4e78-b9b4-4478272973d4.jpg"
              title="So you have trained for a while?"
              text="If you have gained strength and/or muscle from your recent training you have come to the correct place. If not, go back to beginner tips and follow those tips.
              You are welcome to read this even though, but you might not understand what the hell Im talking about"
            />
            <PopupTextWithImg
              src="https://preview.redd.it/8ej1aowrdon71.png?width=743&format=png&auto=webp&s=fa451400fd3c116d24ee39d883b32a3c28ffce0b"
              title="Tip 1: If it ain't broke, don't fix it:"
              text="Image this: You have trained the same excersises and/or program for the last couple of months. Every week you have progress. Your eating habits are good. You 
              think to yourself: If i change this, then it my progress will be even greater! At this stage I would say: NO! Stick to what works and don't try to invent the wheel all
              over again. Why would you change something that is already perfectly working? You are allowed to TRY out other excersises, but please don't switch out excersises if they
              are still giving you progress. Variation is fine ofcrouse, but thats what it is: Variation. Meaning you can sometimes choose to do excersise B instead of excersise A (if the
              A and B trains the same area). IF however you have little to no progress in an excersise you SHOULD try out something else. Remember to log everything that you do down so
              you can look back and see if the change actually had any benefits. The less changes you are doing to your program, the better of you are in the long term"
            />
            <PopupTextWithImg
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              title="Tip 2: Dont't train every day:"
              text="It's very hard to `over-train` unless you try your best to ignore your body's signal to stop. As a new lifter a maximum of 3 days a week will give you result
              for a long time ahead. The body does not get stronger when you train, its when you recover from the training that the body is building you stronger then you where
              before. If you are stuck with either muscle- or strength-gain you either have to look at your nutrition or the intensity you train at."
            />
            <PopupTextWithImg
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              title="Tip 3: Don't eat like a pig, but neither like a monk"
              text="Unless you are training at a very high level, eat 0.8-1.6 gram per kilo of bodyweight in protein every day. The rest is literary piss, as you pee the excessive
              out. Want that chocolate-bar? Sure why not. Eating a chocolate-bar every day? Sure you will get bigger and stronger, but also a bigger belly. `Moderation is key`.
              Remember your greens, and don't be afraid of carbs, but avoid suger if possible. Complex carbs is jetfuel while suger is easily stored as fat. As long as you eat reasonably healthy don't overthink 
              what you eat, just how much."
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdvancedTipsWindow;
