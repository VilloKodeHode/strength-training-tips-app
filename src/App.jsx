import { useState } from "react";
import Logo from "./assets/JVlogo.png";
import "./App.css";
import BasicsWindow from "./Components/PopupWindow/BasicsWindow/Basics";
import BeginnerTipsWindow from "./Components/PopupWindow/BeginnerTipsWindow/BeginnerTips";
import AdvancedTipsWindow from "./Components/PopupWindow/AdvancedTipsWindow/AdvancedTips";
import NutritionTipsWindow from "./Components/PopupWindow/NutritionTipsWindow/NutritionTips";
import GoodExcersisesTipsWindow from "./Components/PopupWindow/GoodExcersisesWindow/GoodExcersisesTips";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="grid">
        <header className="">
          <figure
            id="top"
            className="md:flex justify-center bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 m-4"
          >
            {/* <img
            className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
            src={Logo}
            alt=""
            width="384"
            height="512"
          /> */}
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <h1>Strength training tips</h1>
              <p className="text-lg font-medium">
                An app with smart tips about resistance-training
              </p>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Joakim Villo
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  18 years of strength-training experience
                </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Bachelor's degree in Nutrition
                </div>
              </figcaption>
            </div>
          </figure>
        </header>
        <main>
          <div className="my-10 w-2/3 m-auto">
            <p>
              This app is ment for those who wish to get in shape using
              resistance-training, but have no idea how. Learning through this
              app will give you realistic and achievable goals. This is not a
              quick fix for neither your weight, low self-asteem or eating
              habits. YOU have to put in the work, I will tell you how.
            </p>
            <p>
              If you are a total newbie, you should start by reading the "Basics
              of resistance-training", then the "beginner tips" page and follow
              those tips for a while before reading any futher. You can ofcourse
              read ahead, but it might not make much sense yet.
            </p>
            <div className="flex justify-center my-10">
              <div className="bg-slate-500 rounded-3xl w-1/2 p-12 flex justify-center">
                <BasicsWindow />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-10 m-4">
            <div className="bg-[url(https://images.unsplash.com/photo-1586401100295-7a8096fd231a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12 flex">
              <BeginnerTipsWindow />
            </div>
            <div className="bg-[url(https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGxpZnRpbmclMjB3ZWlnaHRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12 flex">
              <AdvancedTipsWindow />
            </div>
            <div className="bg-[url(https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12 flex">
              <NutritionTipsWindow />
            </div>
            <div className="bg-[url(https://images.unsplash.com/photo-1517964706594-8bf49837d8dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12 flex">
              <GoodExcersisesTipsWindow
                title="Good excersises"
                description="Which excersises are the best?"
              />
              {/* <h2 className="text-2xl text-red-100">Good excersises</h2>
  
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                Which excersises <br /> are the best?
              </button> */}
            </div>
            <div className="bg-[url(https://3.bp.blogspot.com/-CDIPMwzpG-s/UEU0mBkn76I/AAAAAAAABOs/7oEFRLhiKZY/s1600/Rep%20continuum.jpg)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Rep-ranges explained</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                Are you training with <br /> the correct reps?
              </button>
            </div>
            <div className="bg-[url(https://www.ironcompany.com/media/magefan_blog/2020/06/Nutrition-Wave-Article-Marty-Gallagher.jpg)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Advanced nutrition</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                Optimize your <br /> eating
              </button>
            </div>
            <div className="bg-[url(https://www.thebootcampeffect.com/wp-content/uploads/photo2-300x179-300x179.png)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Recovery explained</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                How to recover properly
              </button>
            </div>
            <div className="bg-[url(https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2022/04/Upper-lower-bodybuilding-split.png?resize=771%2C474&ssl=1)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Splits vs whole-body</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                Figure out what works best for you
              </button>
            </div>
            <div className="bg-[url(https://i.pinimg.com/originals/f9/ae/eb/f9aeeb68dfddb153864d4ef1eb68127b.jpg)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Set types</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                HOW are you lifting?
              </button>
            </div>
            <div className="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kJQzVDm375FtA60omzY2ZbUw4-ToLDReOnnYIKmFCsjqDq3s7awjOfKlLKFNhH_Le6s&usqp=CAU)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Personal set types</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                My own set types that really works!
              </button>
            </div>
            <div className="bg-[url(https://qph.cf2.quoracdn.net/main-qimg-517b730608ffe7d8495bb854f4d59b5a-lq)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Personal eating tips</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                My own experience with nutrition
              </button>
            </div>
            <div className="bg-[url(https://barbend.com/wp-content/uploads/2016/05/16.-BB_HeaviestDeadliftsofAllTime_Featured_v2.jpg)] rounded-3xl object-cover max-h-40 max-w-23 bg-cover bg-center p-12">
              <h2 className="text-2xl text-red-100">Personal lifting tips:</h2>
              {/* <p className="mb-8 text-slate-900 bg-slate-200">
                Need tips about what to eat for gains?
              </p> */}
              <button className="px-4 py-2 text-purple-100 bg-red-600 rounded">
                My own experience with lifting
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
