import { useState } from "react";
import Button from "../../Button/Button";
import PopupTextWithImg from "../PopUpText";

const GoodExcersisesTipsWindow = (props) => {
  const { title, description } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2 className="text-2xl p-2 text-slate-800 bg-slate-100 bg-opacity-80 rounded-l-lg">
        {title}
      </h2>
      <Button
        className="px-4 py-2 text-slate-100 bg-slate-800 opacity-90 rounded-r-lg"
        text={description}
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div className="popup  bg-slate-800" id="nutritionWindow">
          <h2 className="text-2xl text-slate-100 w-fit">{title}</h2>
          <Button
            className="popup-close-btn"
            text="❌"
            onClick={() => setToggle(!toggle)}
          />
          <div className="popup-text flex flex-wrap justify-center">
            <PopupTextWithImg
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              title="So you have trained for a while?"
              text="If you have gained strength and/or muscle from your recent training you have come to the correct place. If not, go back to beginner tips and follow those tips"
            />
            <PopupTextWithImg
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              title="Tip 1: Don't train like the pros:"
              text="Profesional bodybuilders and athletes are in an exceptional tier of fitness and strength. You are not...yet. Start out with light weight and easy to do excersises
              that are low risk of injury. Especially programs made for bodybuilder are usually a waste of time unless you are using the same `fuel` as them. Injuries and frustration
              is what you likely will achieve instead of gains."
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

export default GoodExcersisesTipsWindow;
