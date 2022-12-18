import { useState } from "react";
import Button from "../../Button/Button";
import PopupTextWithImg from "../PopUpText";
import { PopupText } from "../PopUpText";

const BeginnerTipsWindow = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2 className="text-2xl p-2 text-slate-800 bg-slate-100 bg-opacity-80 rounded-l-lg">
        Beginner tips
      </h2>
      <Button
        className="px-4 py-2 text-slate-100 bg-slate-800 opacity-90 rounded-r-lg"
        text="Check out these starter tips"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <>
          <div className="popup bg-slate-800" id="beginnerWindow">
            <h2 className="text-2xl text-slate-100 w-fit">Beginner tips</h2>
            <Button
              className="popup-close-btn"
              text="❌"
              onClick={() => setToggle(!toggle)}
            />
            <div className="popup-text flex flex-wrap justify-center items-center flex-col">
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1483546363825-7ebf25fb7513?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am91cm5hbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                title="First things first:"
                text="When starting out its importent to have the right information. If you start out with no goals and no plan you are likely to get somewhere, but not where you wanted. 
                Keeping a training journal will not only keeping track of your training, you can actually look back and see your progress over time. This can be very motivating if you are ever wondering
                if what you are doing is making you stronger or not. Use an training-app or write it down yourself in a notebook or text-program."
              />
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1532384816664-01b8b7238c8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                title="Tip 1: Don't train like the pros:"
                text="Profesional bodybuilders and athletes are in an exceptional tier of fitness and strength. You are not...yet. Start out with light weight and easy to do excersises
              that are low risk of injury. Especially programs made for bodybuilder are usually a waste of time unless you are using the same `fuel` as them. Injuries and frustration
              is what you likely will achieve instead of gains."
              />
              <PopupTextWithImg
                src="https://goqii.com/blog/wp-content/uploads/shutterstock_1724276902-1024x682.jpg"
                title="Tip 2: Don't train every day:"
                text="The harder you train the longer rest you need. Its up to you to know when your body is telling you to rest instead of training. Although it is very hard to 
                `over-train` unless you try your best to ignore your body's signal to stop. As a new lifter, training a maximum of 3 days a week will give you results for a long 
                time ahead. If you train very lightly, you could train more frequently, but I would instead recommend upping up the intensity of your workouts. The body does not
                get stronger when you train, its when you recover from the training that the body is building you stronger then you where before. If you are stuck with either muscle-
                or strength-gain you either have to look at your nutrition or the intensity you train at. If those seems to be fine, reconsider how often you train and if you are 
                getting adequate recovery (sleep and rest in between training-sessions)"
              />
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1589010588553-46e8e7c21788?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=960&q=80"
                title="Tip 3: Don't eat like a pig, but neither like a monk"
                text="Unless you are training at a very high level, eat 0.8-1.6 gram per kilo of bodyweight in protein every day. The rest is literary piss, as you pee the excessive
              out. Want that chocolate-bar? Sure why not. Eating a chocolate-bar every day? Sure you will get bigger and stronger, but also a bigger belly. `Moderation is key`.
              Remember your greens, and don't be afraid of carbs, but avoid suger if possible. Complex carbs is jetfuel while suger is easily stored as fat. There are however some
              nutrition tricks which can overcome this, which you can read more about in the `nutrition tips` section. As long as you eat reasonably healthy, don't overthink 
              what you eat, just how much."
              />
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1548610325-af59423f54bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1093&q=80"
                title="Tip 4: Doing something is alot better than doing noting"
                text="When you start out training you are likely going to get alot of progress quick, if you are actually doing the works. Even training once a week have shown to give
                benefits to strength and overall general health. This is infinitly more true if you are just starting out and you should see improvement in strength, endurance and general
                wellbeing within the first couple of weeks. Training once a week is good. Training twice is better. Training three times is said to be the golden spot for most newbies if
                you want the gain rather sooner then later."
              />
              <PopupTextWithImg
                src=""
                title="Summery:"
                text="After reading these tips you should remember:"
              />
              <div className="bg-slate-500 p-5">
                <PopupText text="1: Get the correct information (this app is a good place to start) and keep track of your workouts." />
                <PopupText text="2: Start out easy and don't copy athletes or bodybuilder progress" />
                <PopupText text="3: Eat properly and avoid `uneccecery food groups` like heavily processed food and sugary drinks" />
                <PopupText text="4: Train atleast once a week, but no more than three times in the beginning" />
                <PopupText text="If you need a basic training-program for most beginners, follow this link:" />
                {/* <Button
                  className="px-4 py-2 text-slate-100 bg-slate-800 opacity-90 rounded-r-lg"
                  text="Check out these starter tips"
                  onClick={""}
                >
                  <a
                    href="https://madmuscles.com/step-goal?pp=100&ftm=nif&utm_source=google_search&utm_medium=125770183086&utm_campaign=13599463389&utm_content=544504213110&device=c&utm_term=gym%20workout%20plan%20for%20men&camp_name=&asn=&gclid=CjwKCAiA7vWcBhBUEiwAXieIttLP9p0HJCLw0RWKq5geGqRFZlrygNi2EG5D8QmTXLD2KklWTiTNgRoCW-wQAvD_BwE"
                    target="_blank"
                  >
                    Starter program
                  </a>
                </Button> */}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BeginnerTipsWindow;
