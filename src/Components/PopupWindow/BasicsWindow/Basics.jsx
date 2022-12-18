import { useState } from "react";
import Button from "../../Button/Button";
import PopupTextWithImg from "../PopUpText";
import { PopupText } from "../PopUpText";
import { CustomPopupText } from "../PopUpText";

const BasicsWindow = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <h2 className="text-2xl p-2 text-slate-800 bg-slate-100 bg-opacity-80 rounded-l-lg">
        The basics
      </h2>
      <Button
        className="px-4 py-2 text-slate-100 bg-slate-800 opacity-90 rounded-r-lg"
        text="Learn the basics of resistance-training"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <>
          <div className="popup bg-slate-800" id="basicsWindow">
            <h2 className="text-2xl text-slate-100 w-fit">
              The basics of resistance-training
            </h2>
            <Button
              className="popup-close-btn"
              text="❌"
              onClick={() => setToggle(!toggle)}
            />
            <div className="popup-text flex flex-wrap justify-center items-center flex-col">
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1471342051519-9621d25323fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                title="Welcome to resistance training 101:"
                text="The essence of resistance training is as simple as: 'Pick it up, put it down again and repeat that again and again until you cannot anymore'. In reality its much more
                complex then that, but by reading the tips in this app I will prepare you for your gainventure ahead."
              />
              <PopupText text="Resistance training glossary:" />
              <div className="grid grid-cols-4 w-3/4">
                <div className="border-white border-solid border flex flex-col">
                  <PopupText text="Reps = repetitions:" />
                  <CustomPopupText
                    text="how many times you pick it up and put it down again"
                    className="w-3/4 m-auto"
                  />
                </div>
                <div className="border-white border-solid border flex flex-col">
                  <PopupText text="Sets = Set of reps:" />
                  <CustomPopupText
                    className="w-3/4 m-auto"
                    text="how many times you do an amount of reps, rest and then do it again"
                  />
                </div>
                <div className="border-white border-solid border flex flex-col">
                  <PopupText text="Rest:" />
                  <CustomPopupText
                    text="How long you rest (recover) in between sets, after doing the set reps"
                    className="w-3/4 m-auto"
                  />
                </div>
                <div className="border-white border-solid border flex flex-col">
                  <PopupText text="Excersise name:" />
                  <CustomPopupText
                    text="Specifies the excersise you are doing (there are many variations of the same excersise)"
                    className="w-3/4 m-auto"
                  />
                </div>
                <div className="border-white border-solid border flex flex-col col-span-4">
                  <PopupText text="Putting it all together:" />
                  <CustomPopupText
                    className="w-3/4 m-auto"
                    text='"I did the barbell squat with 40kg total weight for ten reps, then restet one minute, then repeated that for a total of four sets"'
                  />
                  <PopupText text="Can be written as:" />
                  <CustomPopupText
                    className="w-3/4 m-auto"
                    text="Squat, (1 minute rest): 10reps x 40kg, 10reps x 40kg 10reps x 40kg 10reps x 40kg"
                  />
                  <PopupText text="Or shorted to:" />
                  <CustomPopupText
                    className="w-3/4 m-auto"
                    text="Squat, (1 min rest): 40kg x 10,10,10,10 (should be logged in this format to save space)"
                  />
                </div>
              </div>
              <PopupTextWithImg
                src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                title="Feeling confident enough to get to the gym?"
                text="If the answer is yes, Good! If not, then I will try to change your mentality to supercharge your confidence."
              />
              <PopupText text="Remember that EVERYONE have had to start somewhere. You are never too weak or fat to start training!" />
              <CustomPopupText
                className="w-3/4 m-auto"
                text="Facts: Nobody except a chosen few are born with an amazing physique or strength (genetics ftw). There are those who ignore their godgiven genetics and use steroids
                to get as big and/or fit as possible as quick as possible. Steroids are more typical than you would think. Celebrities, athletes
                and your local gym-jock is likely using or has used some form of steroids. They may look good, but their health isn't looking good long term. Our goal is to get you
                in shape and get functional strength for your everyday life. And if you are willing to put in the work with your diet as well you can finally get that summer body
                that you always wanted."
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

export default BasicsWindow;
