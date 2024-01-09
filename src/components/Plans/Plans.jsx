import Title from "../Title/Title";
import PlanCard from "./PlanCard";

const Plans = () => {
    return (
        <div className="md:px-32 md:py-20 mx-5">
            <Title title={'Your Perfect Plans'} subtitle={'Our Pricing'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
                <PlanCard price={'29.99'} type={'Business'} />
                <PlanCard price={'39.99'} type={'Standard'} />
                <PlanCard price={'59.99'} type={'Premium'} />
            </div>
        </div>
    );
};

export default Plans;