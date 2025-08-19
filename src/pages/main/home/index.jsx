import ResumeSvg from "@/assets/svg/resume-svg";
import GoalSvg from "@/assets/svg/goal-svg";
import InterviewSvg from "@/assets/svg/interview-svg";
import CoachSvg from "@/assets/svg/coach-svg";
import PortfolioSvg from "@/assets/svg/portfolio-svg";
import BadgeSvg from "@/assets/svg/badge-svg";
import { useNavigate } from "react-router";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PostsFeed from "@/components/main/home/postfeed";
import Rightarrowsvg from "@/assets/svg/rightarrow-svg";

const Home = () => {
  const iconCards = [
    {
      id: 1,
      icon: <ResumeSvg />,
      text: "Resume builder",
      route: "/resume-builder",
    },
    {
      id: 2,
      icon: <GoalSvg />,
      text: "Goal Tracker",
      route: "/goal-tracker",
    },
    {
      id: 3,
      icon: <InterviewSvg />,
      text: "Interview center",
      route: "/interview-center",
    },
    {
      id: 4,
      icon: <CoachSvg />,
      text: "Learning coach",
      route: "/learning-coach",
    },
    {
      id: 5,
      icon: <PortfolioSvg />,
      text: "Portfolio builder",
      route: "/portfolio-builder",
    },
    {
      id: 6,
      icon: <BadgeSvg />,
      text: "Badges",
      route: "/badges",
    },
  ];
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12  ">
          <div className="col-span-3 bg-transparent p-4">
            <div className="max-w-sm mx-auto">
              <Card className="relative overflow-hidden rounded-xl shadow-lg h-[340px] !p-0">
                {/* Cover Image */}
                <img
                  alt="cover"
                  src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=800&q=80"
                  className="h-32 w-full object-cover"
                />

                {/* Profile Avatar (absolute, overlapping cover, left aligned) */}
                <div className="absolute left-6 top-20">
                  <Avatar className="h-20 w-20 border-4 border-white shadow-md">
                    <AvatarImage
                      src="https://i.pravatar.cc/100"
                      alt="John Doe"
                    />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>

                {/* Profile Info */}
                <CardContent className="mt-5 text-left">
                  <h2 className="font-semibold text-lg">John Doe</h2>
                  <p className="text-gray-500 text-sm">Full Stack Developer</p>
                  <p className="text-gray-400 text-xs">
                    Building modern web apps
                  </p>

                  <div className="flex items-center gap-2 mt-3">
                    <div className="h-5 w-5 rounded-full bg-gray-300" />
                    <h3 className="text-gray-600 text-sm font-medium">
                      Sunamgonj Govt College
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="col-span-6 bg-transparent p-4 h-screen overflow-y-scroll">
            <PostsFeed />
          </div>

          <div className="col-span-3 bg-transparent p-4">
            <div className="bg-white p-5 rounded-lg">
              <div className="flex flex-col flex-wrap gap-3">
                {iconCards.length > 0 &&
                  iconCards.map((card) => (
                    <div
                      key={card.id}
                      onClick={() => navigate(card.route)}
                      className="flex items-center space-x-2 bg-transparent border-b px-4 py-2 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                      <div className="bg-gray-100 border rounded-full p-3">
                        {card.icon}
                      </div>
                      <span className="text-[#191919] text-[16px] font-medium">
                        {card.text}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="mt-5">
              <h1>Ai matches</h1>

              <div className="bg-white p-5 rounded-lg mt-2 ">
                <div className="flex justify-between">
                  <div>
                    <h2 className="">2 new job matches for</h2>
                    <h3 className="">“ui/ux designer’</h3>
                  </div>
                  <div>
                    <div className="flex justify-center p-3 bg-[#EDFBFB] rounded-lg">
                      <Rightarrowsvg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
