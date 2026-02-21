import aiWorkPlatform from "../../assets/images/AI_work_platform.png";
import Button from "../../components/Elements/Button";

const Hero = () => {
  return (
    <section className="p-4">
      <div className="content bg-[var(--bg-color)] h-screen w-full rounded-[40px] flex flex-col justify-center items-center">
        <div className="img">
          <img
            className="w-[178px]"
            src={aiWorkPlatform}
            alt="AI Work Platform"
          />
        </div>
        <div className="title my-4">
          <h1 className="text-gray-700 text-7xl font-extralight leading-[79px] text-center">
            From managing work, <br />
            to doing the work for you
          </h1>
        </div>
        <div className="text">
          <p className="font-light text-[18px] leading-[29px] text-center text-gray-700">
            Agentic AI products that deliver results across projects, marketing,
            <br />
            sales, operations, and engineering.
          </p>
        </div>
        <div className="button my-8">
          <Button
            text={"Get Started"}
            url={"#"}
            style={"btn-solid"}
            icon={true}
          />
        </div>
        <div className="text">
          <p className="text-center text-[13px] leading-[14px] text-[var(--text-color-2)]">
            No credit card needed ✦ Unlimited time on Free plan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
